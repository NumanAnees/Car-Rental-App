const express = require("express");

const app = express();
const dbConnection = require("./Db/db");
app.use(express.json());

const port = 8000;
app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/api/cars/", require("./Routes/carsRoutes"));

app.listen(port, () => {
  console.log(`Server is running at port: ${port} `);
});
