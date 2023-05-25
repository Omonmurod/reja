console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
}) ;

// MongoDB connect
const db = require("./server").db();
const mongodb = require("mongodb");

// 1: Entering codes
app.use(express.static("public")); //public folder har kim uchun ochiq
app.use(express.json()); //json formatdagi kelayotgan infoni objectga o'zgartirib beradi
app.use(express.urlencoded({extended: true}));  //HTML formda insert qilingan infoni express qabul qilishi un ishlatiladi

// 2: Codes based on SESSION

// 3: Views code (BSSR backend side server rendering backendda viewni yasab olyapmiz)
app.set("views", "views");
app.set("view engine", "ejs"); // view engine ejs ekanligi bildirildi

// 4: Rooting codes
app.post("/create-item", (req, res) => {
  const new_reja = req.body.reja;
  console.log("user entered /create-item");
  db.collection("plans").insertOne(
    { reja: new_reja }, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    {_id: new mongodb.ObjectId(id)}, 
    function(err, data) {
      res.json({state: "success"});
    }
  );
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    {_id: new mongodb.ObjectId(data.id)}, 
    {$set: {reja: data.new_input}}, 
    function(err, data) {
      res.json({state: "success"});
    }
  );
});

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function() {
      res.json({state: "Hamma rejalar o'chirilsinmi?"});
    });
  }
});

// app.get("author", (req, res) => {
//   res.render("author", { user: user });
// });

app.get("/", function(req, res) {   // "/" page
  console.log("user entered /");
  db.collection("plans") 
  .find()
  .toArray((err, data) => {
    if(err) {
      console.log(err);
      res.end("something went wrong");  //HTML kodni qaytadari
    } else {
      res.render("reja", {items: data});
    }
  });
});

module.exports = app;