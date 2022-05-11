const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./models/index.js");

var corsOptions = {
  origin: false
};

const app = express();
app.use(cors());
// parse requests of content-type - application/json
app.use(bodyParser.json({ limit: "200mb"}));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//set images as static folder
app.use('/images',express.static('images'));

db.sequelize.sync(/*{force: true}*/);
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to tpl site." });
});

require('./routes/anunt.route.js')(app);
require('./routes/statie.route.js')(app);
require('./routes/traseu.route.js')(app);
require('./routes/statie_traseu.route.js')(app);
require('./routes/imagine.route.js')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});