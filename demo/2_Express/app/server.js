'use strict';

var path = require('path');
var rootPath = path.resolve(__dirname);

var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

var hbs = exphbs.create({
  extname: '.hbs',
  partialsDir: rootPath + '/views/partials'
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', rootPath + '/views/layouts');

// app.get('/', function(req, res) {
//   res.send('Hello World!');
// });

require('./routes/routes').setupRoutes(app);

app.listen(3000, function(){
  console.log('App started on port 3000');
});
