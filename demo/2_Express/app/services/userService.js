'use strict';

var userService = {
	getUser: function(userId) {
		return {
			name: 'Matt',
			id: userId
		};
	}
};

module.exports = userService;