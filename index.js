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

app.listen(3000);
