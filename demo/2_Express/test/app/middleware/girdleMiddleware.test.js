'use strict';

var assert = require('chai').assert;
var sinon = require('sinon');
var request = require('request');
var girdleMiddleware = require('../../../app/middleware/girdleMiddleware');
var httpMocks = require('node-mocks-http');

describe('Girdle Middleware', function(){

	var req, res;

  beforeEach(function() {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    res.locals = {};

    sinon.stub(request, 'get', function(url, cb) {
      cb(null, {}, '<html></html>');
    });
  });

  afterEach(function() {
    request.get.restore();
  });
  
  it('puts a function on res.locals.template', function(done){
    girdleMiddleware.getGirdle(req, res, function(){
      assert.isFunction(res.locals.template);
      done();
    });
  });

});