'use strict';

var handlebars = require('handlebars');
var request = require('request');

var girdleMiddleware = {
  
  getGirdle: function(req, res, next) {
    var url = 'http://girdle-dave.nap-dev.ext.net-a-porter.com/girdle/fabric?locale=en-GB';
    request.get(url, function(err, response, body) {
      res.locals.template = handlebars.compile(body);
      next();
    });  
  }

};

module.exports = girdleMiddleware;