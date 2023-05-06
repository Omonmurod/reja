console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1: Entering codes
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Codes based on SESSION

// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Rooting codes
app.get("/hello", function(req, res) {
  res.end(`<h1 style = "background: green">Hello World by Jacob</h1>`);
});
app.get("/gift", function(req, res) {
  res.end(`<h1 style = "background: pink">You are the page of gifts</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
  console.log(`The server is running successfully on port: ${PORT}`);
});