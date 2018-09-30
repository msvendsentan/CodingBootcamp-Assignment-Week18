const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const html_routes = require("./routes/html_routes.js");
const api_routes = require("./routes/api_routes.js");

// Require all models
//const db = require("./models");

const PORT = 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("hbs", exphbs({
	extname: "hbs",
	defaultLayout: "main"
}));
app.set("view engine", "hbs");

app.use(express.static("public"));

//mongoose.connect("mongodb://localhost/dbhere");


app.use(html_routes);
app.use(api_routes);


app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
});

