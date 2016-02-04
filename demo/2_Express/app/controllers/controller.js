'use strict';

var controller = {
  render: function(req, res) {
    res.render('index', function(err, html) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(html);  
      }
    });
  }
};

module.exports = controller;