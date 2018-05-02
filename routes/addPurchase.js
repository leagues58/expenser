var express = require('express');
var router  = express.Router();
var db      = require('./../db');



/* GET home page. */
router.get('/', (req, res, next) => {
    
    //res.render('addPurchase', {storeData: getStoreInfo()});
    getStoreInfo(res);
    
});

module.exports = router;




async function getStoreInfo(response) {


    
    var query = `SELECT
                    S.store_id, S.name, S.city, S.state
                FROM Store S`;

    await db.connection.query(query, (error, results, fields) => {
        if (error) throw error;
        response.render('addPurchase', {storeData: results});
    });
}