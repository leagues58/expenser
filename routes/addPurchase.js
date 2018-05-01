var express = require('express');
var router  = express.Router();
var db      = require('./../db');



/* GET home page. */
router.get('/', (req, res, next) => {
    
    db.connection.connect((error) => {
        if (error) throw error;
      });

    
    var query = `SELECT
                    S.store_id, S.name, S.city, S.state
                FROM Store S`;

    db.connection.query(query, (error, results, fields) => {
        if (error) throw error;
        res.render('addPurchase', {storeData: results});
    });

    
});

module.exports = router;




function getStoreInfo() {
    
}