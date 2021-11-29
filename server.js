const express = require("express");
const dbConnection = require("./Db/db");
const app = express();
const port = 8000;
app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(port, () => {
  console.log(`Server is running at port: ${port} `);
});
