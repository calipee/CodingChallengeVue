const express = require("express");
const cors = require("cors");

const app = express();

// CORS-Middleware hinzufügen
app.use(cors());

// Initialer Wert für den Counter
let counter = 0;

// Array zum Speichern der letzten 5 Zeitstempel
let timestamps = [];

// Middleware zum Parsen von JSON-Anfragen
app.use(express.json());

// Route zum Abrufen des aktuellen Zählerwerts
app.get("/counter", (req, res) => {
  console.log("GET /counter called");
  res.json({ counter });
});

// Route zum Erhöhen des Zählers
app.post("/counter/increment", (req, res) => {
  counter++;
  const now = new Date().toISOString();
  timestamps.push(now);
  if (timestamps.length > 5) {
    timestamps.shift(); // Entferne den ältesten Zeitstempel, wenn mehr als 5 vorhanden sind
  }
  console.log("POST /counter/increment called");
  console.log(`Counter incremented to: ${counter}`);
  console.log(`Timestamps: ${timestamps}`);
  res.json({ counter, timestamps });
});

// Route zum Zurücksetzen des Zählers
app.post("/counter/reset", (req, res) => {
  counter = 0;
  timestamps = [];
  console.log("POST /counter/reset called");
  console.log("Counter reset to 0");
  res.json({ counter });
});

// Route zum Abrufen der letzten 5 Zeitstempel
app.get("/counter/timestamps", (req, res) => {
  console.log("GET /counter/timestamps called");
  res.json({ timestamps });
});

if (process.env.NODE_ENV != "test") {
  app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
  });
}
module.exports = app;
