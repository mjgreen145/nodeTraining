'use strict';

var userMiddleware = {
  getUser: function(req, res, next) {
    res.locals = {
      user: req.params.user
    };
    next();
  }
};

module.exports = userMiddleware;