const express = require("express");
const ejs     = requier("ejs");
const app     = express();


app.get("*", function(req, res){
    res.render("notfound");
});


app.listen(3001, 'localhost', function(){
  console.log("SERVER IS RUNNING...AWAY!");
});
