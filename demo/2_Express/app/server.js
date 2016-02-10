'use strict';

var express = require('express');

var app = express();

app.listen(3000, function(){
  console.log('App started on port 3000');
});


















































// var path = require('path');
// var rootPath = path.resolve(__dirname);

// var exphbs  = require('express-handlebars');

// var hbs = exphbs.create({
//   extname: '.hbs',
//   partialsDir: rootPath + '/views/partials'
// });

// app.engine('.hbs', hbs.engine);
// app.set('view engine', '.hbs');
// app.set('views', rootPath + '/views/layouts');

// require('./routes/routes').setupRoutes(app);