//Express server generating templates.


var path = require('path');
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var port = process.env.PORT || 3000;
var categoryData = require('./categoryData');
var recipeData = require('./recipeData');


//set handlebars to default for .render
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//serve css and client.js
app.use(express.static('public'));

app.get('/', function (req, res, next) {
    res.status(200).sendFile(__dirname + '/public/index.html');
  });

  app.get("*", function (req, res, next) {
    console.log("not found");
    res.status(404);
  });


app.listen(port, function (err) {
    if (err) {
      throw err;
    }
    console.log("== Server listening on port", port);
  });