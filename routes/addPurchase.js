var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    var storeData = getStoreData();












    res.render('addPurchase', {data });
});

module.exports = router;







function getStoreData() {
    
}
