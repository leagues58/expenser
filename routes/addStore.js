var express = require('express');
var router = express.Router();

/* GET addStore page. */
router.get('/', function(req, res, next) {
  res.render('addStore', { title: 'Add Store' });
});

module.exports = router;