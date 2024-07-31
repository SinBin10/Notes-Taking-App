const express = require("express");
const path = require("path");
const app = express();
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/:username/:age", (req, res) => {
  res.send(
    `Your name is ${req.params.username} and your age is ${req.params.age}`
  );
});

app.listen(3000);
