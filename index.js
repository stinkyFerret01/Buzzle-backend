const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hi" });
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello" });
});

app.listen(3000, () => {
  console.log("Server has started");
});
