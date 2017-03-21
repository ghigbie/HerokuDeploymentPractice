const express = require("express");
const ejs     = require("ejs");
const app     = express();

app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("home");
});

app.get("*", function(req, res){
    res.render("notfound");
});


app.listen(3001, 'localhost', function(){
  console.log("SERVER IS RUNNING...AWAY!");
});
