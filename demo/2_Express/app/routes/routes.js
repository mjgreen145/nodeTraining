'use strict';

var setupRoutes = function(app) {
  
  app.get('/', function(req, res) {
    res.send('Hello World!');
  });

  app.get('/welcome', function(req, res) {
    res.send('Welcome!');
  });

};

module.exports = {
  setupRoutes: setupRoutes
};














































// app.get('/:country/:language/product/:pid', function(req, res) {
  //   res.send(req.params);
  // });

  // app.get('/user/:user', function(req, res) {
  //   var template = fs.readFileSync('./demo/2_Express/views/user.hbs').toString();

  //   var html = handlebars.compile(template)({
  //     user: req.params.user
  //   });

  //   res.send(html);
  // });

  // var controller = require('../controllers/controller');
  // var userMiddleware = require('../middleware/userMiddleware');

  // app.get('/user/:user',
  //   userMiddleware.getUser,
  //   controller.render
  // );