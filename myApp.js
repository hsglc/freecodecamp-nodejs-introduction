var express = require("express");
var app = express();

console.log("Hello World");

function middleware(req, res, next) {
  console.log("Logs");
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
}

app.use(middleware);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  let obj;
  if (process.env.MESSAGE_STYLE === "uppercase") {
    obj = "Hello json".toUpperCase();
  } else {
    obj = "Hello json";
  }
  res.json({
    message: obj,
  });
});

app.use("/public", express.static(__dirname + "/public"));

module.exports = app;
