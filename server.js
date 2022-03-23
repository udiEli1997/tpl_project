const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./models/");

var corsOptions = {
  origin: false
};

const app = express();
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync();
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to tpl site." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});