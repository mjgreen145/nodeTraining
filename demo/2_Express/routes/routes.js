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
