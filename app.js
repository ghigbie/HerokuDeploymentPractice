const express = require("express");
const ejs     = require("ejs");
const app     = express();

app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("home");
});

app.get("/home", function(req, res){
    res.redirect("/");
});

app.get("/index", function(req, res){
    res.redirect("/");
});

app.get("/game", function(req, res){
    res.render("portfolioPages/rgbColorGame");
});

app.get("*", function(req, res){
    res.render("notfound");
});

//for deploying on local machine
// app.listen(3001, 'localhost', function(){
//   console.log("SERVER IS RUNNING...AWAY!");
// });

//for deplyoing on heroku
app.listen(process.env.PORT, process.env.IP, function(){
  console.log("SERVER IS RUNNING...AWAY");
});
