const fs = require("fs");

// ----------------------------------
// Load JSON Data
// ----------------------------------
function loadData() {
    const raw = fs.readFileSync("career_data.json", "utf-8");
    return JSON.parse(raw);
}

// ----------------------------------
// Core Career Logic
// ----------------------------------
function getCareerGuidance(student) {
    const data = loadData();

    // Decide level
    const level = String(student.class) === "10" ? "after10th" : "after12th";

    // Get stream options
    const stream = student.stream;
    const streamOptions = data[level].streams[stream] || [];

    // Government jobs
    const govtJobs = data[level].government_jobs;

    // Scholarships
    const scholarships = data[level].scholarships;

    // Build structured response
    const response = {
        student_profile: {
            class: student.class,
            stream: stream,
            marks: student.marks || null,
            interest: student.interest || null,
            state: student.state || null,
            language: student.language || null
        },
        recommended_paths: streamOptions,
        government_opportunities: govtJobs,
        scholarships: scholarships,
        next_steps: [
            "Choose a path that matches your interest and strengths.",
            "Research colleges or institutes in your area.",
            "Apply for scholarships early.",
            "If planning for government exams, start preparation in advance."
        ]
    };

    return response;
}

// ----------------------------------
// TESTING BLOCK
// ----------------------------------

// Example 1: Class 12 Science Student
const studentInput12 = {
    class: 12,
    stream: "Science",
    subjects: ["Physics", "Chemistry", "Biology"],
    marks: 78,
    interest: "Medical",
    state: "Uttar Pradesh",
    language: "Hindi"
};

const result12 = getCareerGuidance(studentInput12);

console.log("\n===== CLASS 12 RESULT =====\n");
console.log(JSON.stringify(result12, null, 4));


// Example 2: Class 10 Commerce Student
const studentInput10 = {
    class: 10,
    stream: "Commerce",
    marks: 72,
    interest: "Business",
    state: "Madhya Pradesh",
    language: "Hindi"
};

const result10 = getCareerGuidance(studentInput10);

console.log("\n===== CLASS 10 RESULT =====\n");
console.log(JSON.stringify(result10, null, 4));