const express = require("express");

// express app
const app = express();

// listen to port
app.listen(8080);

// routing
app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

app.get("/contact-me", (req, res) => {
  res.sendFile("./views/contact-me.html", { root: __dirname });
});

// 404, i.e. it runs when all other pages were not found
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
