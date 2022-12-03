const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "test ok" });
});

app.listen(3000, () => {
  console.log("Server has started");
});
