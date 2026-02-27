from flask import Flask, render_template, request, redirect, url_for, flash, session, jsonify
import os
import tempfile
from dotenv import load_dotenv
import markdown
import bleach
from datetime import datetime

from langchain_groq import ChatGroq
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_core.prompts import ChatPromptTemplate
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings

load_dotenv()

app = Flask(__name__)
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max file size
app.config['SECRET_KEY'] = 'your_secret_key_here'

groq_api_key = os.getenv('GROQ_API_KEY')

llm = ChatGroq(
    groq_api_key=groq_api_key,
    model_name="llama-3.1-8b-instant"
)

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are an expert tutor. Answer the user's question using ONLY the provided context.\n\n<context>\n{context}\n</context>\n\nRequirements for your answer:\n- Be detailed and explanatory, not brief.\n- Use clear Markdown headings and spacing.\n- For each key concept or point you mention, write 3 to 5 sentences explaining it.\n- Include an example if and only if an example is present in the context.\n- Avoid one-line bullet answers; bullets are allowed only if each bullet contains a multi-sentence explanation.\n- If the context does not contain enough information to answer a part of the question, say so explicitly and only answer what the context supports.\n- Do not use outside knowledge or assumptions."),
    ("human", "Question: {input}")
])

# Global variable to store vector store
vector_store = None

ALLOWED_HTML_TAGS = list(bleach.sanitizer.ALLOWED_TAGS) + [
    "p",
    "br",
    "hr",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "pre",
    "code",
    "span",
    "div",
]

ALLOWED_HTML_ATTRIBUTES = {
    "*": ["class"],
}


def render_answer_html(text):
    if not text:
        return ""

    md_html = markdown.markdown(
        text,
        extensions=[
            "extra",
            "sane_lists",
            "nl2br",
            "smarty",
        ],
        output_format="html5",
    )

    return bleach.clean(md_html, tags=ALLOWED_HTML_TAGS, attributes=ALLOWED_HTML_ATTRIBUTES, strip=True)

def load_vector_store():
    global vector_store

    try:
        embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
        vector_store = FAISS.load_local(
            os.path.abspath("vectorstore/db_faiss"),
            embeddings,
            allow_dangerous_deserialization=True,
        )
        return True, "Knowledge base loaded successfully!"
    except Exception as e:
        vector_store = None
        return False, f"Error loading knowledge base. Run create_index.py first. Details: {str(e)}"


_kb_loaded, _kb_message = load_vector_store()


def _now_ts():
    return datetime.now().strftime("%H:%M")


def get_chat_history():
    history = session.get("chat_history")
    if isinstance(history, list):
        return history
    return []


def set_chat_history(history):
    session["chat_history"] = history


def build_conversation_text(history, limit_turns=6):
    if not history:
        return ""

    msgs = []
    turns = 0
    for m in reversed(history):
        if m.get("role") in ("user", "assistant"):
            turns += 1 if m.get("role") == "assistant" else 0
        msgs.append(m)
        if turns >= limit_turns:
            break

    msgs = list(reversed(msgs))
    lines = []
    for m in msgs:
        role = m.get("role", "")
        content = m.get("raw", "") if role == "assistant" else m.get("content", "")
        if not content:
            continue
        if role == "user":
            lines.append(f"User: {content}")
        elif role == "assistant":
            lines.append(f"Assistant: {content}")

    return "\n".join(lines)

@app.route("/")
def home():
    if _kb_message:
        flash(_kb_message)
    messages = get_chat_history()
    return render_template("chat.html", messages=messages)


@app.route("/chat", methods=["POST"])
def chat_api():
    global vector_store

    if vector_store is None:
        return jsonify({"error": "Knowledge base is not loaded. Run create_index.py and restart the app."}), 500

    data = request.get_json(silent=True) or {}
    user_message = (data.get("message") or "").strip()
    if not user_message:
        return jsonify({"error": "Message is required"}), 400

    history = get_chat_history()
    history.append({"role": "user", "content": user_message, "ts": _now_ts()})

    try:
        retriever = vector_store.as_retriever()
        relevant_docs = retriever.invoke(user_message)
        context = "\n\n".join([doc.page_content for doc in relevant_docs])

        conversation = build_conversation_text(history)
        if conversation:
            augmented_question = f"Conversation so far:\n{conversation}\n\nCurrent question: {user_message}"
        else:
            augmented_question = user_message

        messages = prompt.format_messages(context=context, input=augmented_question)
        response = llm.invoke(messages)
        answer = response.content
        answer_html = render_answer_html(answer)

        history.append({"role": "assistant", "content": answer_html, "raw": answer, "ts": _now_ts()})
        set_chat_history(history)

        return jsonify({
            "answer": answer,
            "answer_html": answer_html,
        })
    except Exception as e:
        return jsonify({"error": f"Error generating response: {str(e)}"}), 500


@app.route("/clear_chat", methods=["POST"])
def clear_chat():
    session.pop("chat_history", None)
    return ("", 204)

@app.route("/clear", methods=["POST"])
def clear_session():
    global vector_store
    _reloaded, message = load_vector_store()
    flash(message)
    return redirect(url_for('home'))

if __name__ == "__main__":
    app.run(debug=True, port=5002)
