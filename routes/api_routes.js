const express = require("express");
const cheerio = require("cheerio");
const request = require("request");
const router = express.Router();

router.get("/scrape", function(req, res) {
    request("https://www.nytimes.com/section/world", function(error, response, body) {
        const $ = cheerio.load(body);
        $(".highlights article h2").each(function(i, element) {
            let result = {
                title: $(this).children("a").text(),
                link: $(this).children("a").attr("href"),
                summary: $(this).parent().children(".summary").text()
            }
            
            // now put result in db
            
        });
    });
    res.send("Scrape Complete");
});

/*
router.get("/articles", function(req, res) {
    db.Article.find({}).then(function(dbArticle) {
        res.json(dbArticle);
    }).catch(function(err) {
        res.json(err);
    });
});
*/

module.exports = router;