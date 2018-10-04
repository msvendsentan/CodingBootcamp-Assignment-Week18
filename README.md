# CodingBootcamp-Assignment-Week18
A full-stack (node, express, mongoose, handlebars) news scraping app for Week 18 of UofT's Coding Bootcamp

**Instructions**
* Create an app that will scrape, store, and retrieve articles from a major newspaper

**Specifications**
* Must use express, handlebars, mongoose, cheerio, and request
* Users must be able to save, add notes to, and remove notes from articles with persistent storage

**Features**
* Explored Materialize as a front-end framework
* Full-stack app built to specifications
* api_routes fully defined for future scaling

**Future Directions**
* Allow for choice of newspaper and section--currently only pulls NYT World headlines
* Allow for in-line editing of notes
* Use either websockets or jQuery (latter not ideal) to update the modals live without needing to reload the page (for adding and deleting notes)
* * Currently the app uses handlebars to populate retrieves from storage, so jQuery can't dynamically add content unless jQuery is used to populate from the start
