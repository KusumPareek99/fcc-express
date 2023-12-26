let express = require("express");
require("dotenv").config();
let bodyParser = require("body-parser");
let app = express();
console.log("Hello World");

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

let path = __dirname + "/public";
const middlewareFunction = express.static(path);
app.use(middlewareFunction);
app.use("/public", middlewareFunction);

app.get("/", (req, res) => {
  //   res.send("Hello Express");
  absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
  let style = process.env.MESSAGE_STYLE;
  if (style == "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
  //  res.json({ message: "Hello json" });
});

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({ time: req.time });
  }
);

app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word });
});

app
  .route("/name")
  .get((req, res) => {
    let { first, last } = req.query;
    //console.log(first, last);
    res.json({ name: `${first} ${last}` });
  })
  .post((req, res) => {
    let { first, last } = req.body;
    res.json({ name: `${first} ${last}` });
  });

module.exports = app;
