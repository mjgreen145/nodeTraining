'use strict';

var assert = require('chai').assert;
var userService = require('../../../app/services/userService');

describe('My testing suite', function(){
  
  it('Gets a user object', function(){
    var user = userService.getUser(1234);

    assert.isObject(user);
    assert.equal(user.name, 'Matt');
    assert.strictEqual(user.id, 1234);
  });

});