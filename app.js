const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("Get request is called");
  res.send("Hello World (edited directly from github). again for pipeline test.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
