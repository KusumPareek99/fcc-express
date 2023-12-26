let express = require("express");
require("dotenv").config();
let app = express();
console.log("Hello World");
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

module.exports = app;
