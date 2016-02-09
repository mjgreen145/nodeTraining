'use strict';

var girdleService = {
  get: function(country, language, callback) {
    
    setTimeout(function(){
    	callback(country + '-' + language);
  	}, 10);
    
  }
};

module.exports = girdleService;