import {
  getScienceRawChapterText,
  SCIENCE_CHAPTERS_CLASS_10,
  type ScienceChapterId,
} from '@/lib/scienceStudies';

export type ScienceTestQuestion = {
  id: string;
  number?: number;
  text: string;
  answer?: string;
};

export type ScienceTestSection = {
  id: string;
  title: string;
  questions: ScienceTestQuestion[];
};

export type ScienceTestChapter = {
  id: ScienceChapterId;
  label: string;
  sections: ScienceTestSection[];
};

export const SCIENCE_TEST_CHAPTER_ORDER: ScienceChapterId[] = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
];

function parseAnswerKey(raw: string): Record<number, string> {
  const idx = raw.search(/\bAnswer\s+Key\b/i);
  if (idx < 0) return {};

  const answerText = raw.slice(idx);
  const lines = answerText.split(/\r?\n/).map((l) => l.trim());
  const map: Record<number, string> = {};

  // Format 1: "1. Something"
  for (const line of lines) {
    const m = line.match(/^(\d+)\.\s*(.+)$/);
    if (m) {
      const n = Number(m[1]);
      if (Number.isFinite(n) && n > 0) map[n] = m[2].trim();
    }
  }

  // Format 2: "Q24." then "a) ..." lines
  let currentQ: number | null = null;
  let buffer: string[] = [];
  const flush = () => {
    if (currentQ && buffer.length) map[currentQ] = buffer.join('\n').trim();
    buffer = [];
  };

  for (const line of lines) {
    const q = line.match(/^Q(\d+)\.$/i);
    if (q) {
      flush();
      currentQ = Number(q[1]);
      continue;
    }

    const part = line.match(/^([a-d])\)\s*(.+)$/i);
    if (part && currentQ) {
      buffer.push(`${part[1].toLowerCase()}) ${part[2].trim()}`);
    }
  }
  flush();

  return map;
}

function extractTestPaperBlock(raw: string): string {
  const start = raw.search(/\bTest\s+Paper\b/i);
  if (start < 0) return '';

  const answerKeyIdx = raw.search(/\bAnswer\s+Key\b/i);
  const end = answerKeyIdx > start ? answerKeyIdx : raw.length;
  return raw.slice(start, end).trim();
}

function parseSections(raw: string, chapterId: ScienceChapterId): ScienceTestSection[] {
  const testBlock = extractTestPaperBlock(raw);
  if (!testBlock) return [];

  const answerMap = parseAnswerKey(raw);

  const lines = testBlock.split(/\r?\n/);
  const sections: ScienceTestSection[] = [];
  let currentSection: ScienceTestSection | null = null;
  let currentQuestion: { number?: number; lines: string[] } | null = null;

  const pushQuestion = () => {
    if (!currentSection || !currentQuestion) return;
    const text = currentQuestion.lines.join('\n').trim();
    if (!text) return;

    const qNumber = currentQuestion.number;
    const id = `${chapterId}-q-${qNumber ?? currentSection.questions.length + 1}`;
    currentSection.questions.push({
      id,
      number: qNumber,
      text,
      answer: qNumber ? answerMap[qNumber] : undefined,
    });
  };

  const startSection = (title: string) => {
    pushQuestion();
    currentQuestion = null;
    currentSection = {
      id: `${chapterId}-sec-${sections.length + 1}`,
      title: title.trim(),
      questions: [],
    };
    sections.push(currentSection);
  };

  const startQuestion = (qNumber: number | undefined, firstLine: string) => {
    pushQuestion();
    currentQuestion = { number: qNumber, lines: [firstLine.trim()] };
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    const trimmed = line.trim();
    if (!trimmed) continue;

    const sec = trimmed.match(/^Section\s+[A-Z]\s*:/i);
    if (sec) {
      startSection(trimmed);
      continue;
    }

    const q1 = trimmed.match(/^Q(\d+)\.\s*(.*)$/i);
    if (q1) {
      const qn = Number(q1[1]);
      startQuestion(qn, `Q${q1[1]}. ${q1[2].trim()}`.trim());
      continue;
    }

    const q2 = trimmed.match(/^(\d+)\.\s*(.*)$/);
    if (q2) {
      const qn = Number(q2[1]);
      startQuestion(qn, `${q2[1]}. ${q2[2].trim()}`.trim());
      continue;
    }

    // Continuation line (options a) b) ... or subparts)
    if (!currentSection) startSection('Questions');
    if (!currentQuestion) currentQuestion = { lines: [], number: undefined };
    currentQuestion.lines.push(trimmed);
  }

  pushQuestion();
  return sections.filter((s) => s.questions.length > 0);
}

export function getScienceTestChapter(chapterId: ScienceChapterId): ScienceTestChapter {
  const meta = SCIENCE_CHAPTERS_CLASS_10.find((c) => c.id === chapterId);
  const label = meta ? `Science – Chapter ${meta.id}: ${meta.title}` : `Science – Chapter ${chapterId}`;
  const raw = getScienceRawChapterText(chapterId);
  return {
    id: chapterId,
    label,
    sections: parseSections(raw, chapterId),
  };
}

