var express = require('express');
var router  = express.Router();
var db      = require('./../db');



/* GET addStore page. */
router.get('/', function(req, res, next) {
    res.render('additem', { title: 'Add Item' });
  });





module.exports = router;