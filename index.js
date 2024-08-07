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

app.post("/create", (req, res) => {
  fs.writeFile(`./files/${req.body.title}.txt`, req.body.details, () => {
    res.redirect("/");
  });
});

app.get("/file/:filename", (req, res) => {
  fs.readFile(`files/${req.params.filename}`, "utf-8", (err, data) => {
    res.render("content", { content: data, filename: req.params.filename });
  });
});

app.get("/delete/:filename", (req, res) => {
  fs.unlink(`files/${req.params.filename}`, (err) => {
    res.redirect("/");
  });
});

app.get("/edit/:filename", (req, res) => {
  res.render("edit", { filename: req.params.filename });
});

app.post("/changename", (req, res) => {
  fs.rename(`files/${req.body.oldName}`, `files/${req.body.newName}`, () => {
    res.redirect("/");
  });
});
app.listen(3000);
