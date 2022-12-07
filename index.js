const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
require("dotenv").config();

const mongoose = require("mongoose");
// mongoose.connect(process.env.DATABASE_URL);
mongoose.connect("mongodb://localhost:27017/buzzle");

const Level = mongoose.model("Level", {
  pattern: Array,
  name: String,
});

app.post("/test", async (req, res) => {
  try {
    console.log("ok");
    console.log(req.body);
    res.status(200).json({
      message: "requête edit accordée",
      level: newLevel,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/levels", async (req, res) => {
  try {
    const levels = await Level.find();
    res.status(200).json({
      message: "requête levels accordée",
      levels: levels,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post("/edit", async (req, res) => {
  try {
    const newLevel = new Level({
      pattern: req.body.pattern,
      name: req.body.name,
    });
    await newLevel.save();
    res.status(200).json({
      message: "requête edit accordée",
      level: newLevel,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server has started");
});
