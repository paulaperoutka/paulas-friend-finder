// path
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log("Listening on PORT " + PORT);
});
