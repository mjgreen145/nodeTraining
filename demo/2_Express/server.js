'use strict';

var express = require('express');

var app = express();

// app.get('/', function(req, res) {
//   res.send('Hello World!');
// });

require('./routes/routes').setupRoutes(app);

app.listen(3000, function(){
  console.log('App started on port 3000');
});
