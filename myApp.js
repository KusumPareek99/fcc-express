let express = require("express");
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

module.exports = app;
