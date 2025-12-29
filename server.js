const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

const dbPath = path.join(__dirname, "pinevox_db.json");

// Middleware
app.use(express.json());

// Helper function to read DB
const getDb = () => {
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data);
};

// 1. GET /info -> Returns basic company details
app.get("/info", (req, res) => {
  const db = getDb();
  res.json(db.company_info);
});

// 2. GET /roles -> Returns list of all available roles
app.get("/roles", (req, res) => {
  const db = getDb();
  // Object.keys returns just the names ["frontend", "backend", "analyst"]
  res.json(Object.keys(db.roles));
});

// 3. GET /prep/:role -> The "Knowledge" Endpoint
app.get("/prep/:role", (req, res) => {
  const role = req.params.role.toLowerCase(); // e.g., "backend"
  const db = getDb();

  if (db.roles[role]) {
    res.json({
      message: `Here is your prep kit for ${db.roles[role].title}`,
      roadmap: db.roles[role].study_topics,
      questions: db.roles[role].interview_questions,
    });
  } else {
    res.status(404).json({
      error: "Role not found. Try 'frontend', 'backend', or 'analyst'.",
    });
  }
});

// 4. GET /quiz/:role -> Randomly gives ONE question to practice
app.get("/quiz/:role", (req, res) => {
  const role = req.params.role.toLowerCase();
  const db = getDb();

  if (db.roles[role]) {
    const questions = db.roles[role].interview_questions;
    // Pick a random index
    const randomIndex = Math.floor(Math.random() * questions.length);
    res.json({
      question: questions[randomIndex],
      tip: "Try to answer this out loud using the STAR method.",
    });
  } else {
    res.status(404).json({ error: "Role not found" });
  }
});

app.listen(PORT, () => {
  console.log(`PineVox Prep API running at http://localhost:${PORT}`);
});
