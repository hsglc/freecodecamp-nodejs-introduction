var express = require("express");
var app = express();

console.log("Hello World");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  let obj = "Hello json";
  if(process.env.MESSAGE_STYLE === "uppercase"){
    obj.toUpperCase();
  }
  res.json({
    message: obj,
  });
});

app.use("/public", express.static(__dirname + "/public"));

module.exports = app;
