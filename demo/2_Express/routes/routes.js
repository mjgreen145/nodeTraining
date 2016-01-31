'use strict';

var fs = require('fs');
var handlebars = require('handlebars');

var setupRoutes = function(app) {
  
  app.get('/', function(req, res) {
    res.send('Hello World!');
  });

  app.get('/welcome', function(req, res) {
    res.send('Welcome!');
  });

  app.get('/:country/:language/product/:pid', function(req, res) {
    res.send(req.params);
  });

  app.get('/user/:name', function(req, res) {
    console.log(process.cwd());
    var template = fs.readFileSync('./demo/2_Express/views/user.hbs').toString();

    var html = handlebars.compile(template)({
      name: req.params.name
    });

    res.send(html);
  });

};

module.exports = {
  setupRoutes: setupRoutes
};
