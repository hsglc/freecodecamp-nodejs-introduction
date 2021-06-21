var express = require('express');
var app = express();

console.log("Hello World");

app.get("/",function(req,res){
    res.send('Hello Express');
    res.sendFile(/views/index.html)
})

 module.exports = app;
