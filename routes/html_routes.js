const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
	res.render("index", { test: "hello" });
});

router.get("/index", function(req, res) {
	res.render("index");
});

router.get("/scraped", function(req, res) {
	res.render("scraped");
});

router.get("/saved", function(req, res) {
	res.render("saved");
})

module.exports = router;