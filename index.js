const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Dispying...");
});

app.listen(3000);
