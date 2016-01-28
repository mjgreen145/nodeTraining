'use strict';

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

};

module.exports = {
	setupRoutes: setupRoutes
};
