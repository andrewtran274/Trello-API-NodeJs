const express = require("express");
const app = express();

const HOST = "localhost";
const PORT = 3000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, host, () => {
  console.log(`Server running .... http://${HOST}:${PORT}`);
});
