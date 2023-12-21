import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
  });

app.get("/sign-up", (req, res) => {
    res.render("sign-up.ejs");
  });

app.get("/log-in", (req, res) => {
    res.render("sign-in.ejs");
  });

app.get("/about-us", (req, res) => {
    res.render("about.ejs");
  });

app.get("/contact-us", (req, res) => {
    res.render("contact.ejs");
  });

app.get("/error-503", (req, res) => {
    res.render("error.ejs");
  });

  app.get("/creditors", (req, res) => {
    res.render("creditors.ejs");
  });

  app.get("/blog", (req, res) => {
    res.render("blog.ejs");
  });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });