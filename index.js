const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);

app.get("/", (req, res) => {
  res.json({ message: "test ok" });
});

app.listen(3000, () => {
  console.log("Server has started");
});
