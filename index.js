const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  fs.readdir("./files", (err, files) => {
    res.render("index", { files: files });
  });
});

app.get("/:username/:age", (req, res) => {
  res.send(
    `Your name is ${req.params.username} and your age is ${req.params.age}`
  );
});

app.listen(3000);
