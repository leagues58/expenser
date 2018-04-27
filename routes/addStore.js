var express = require('express');
var router  = express.Router();
var db      = require('./../db');

const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var storeInserted = false;

/* GET addStore page. */
router.get('/', function(req, res, next) {
  res.render('addStore', { title: 'Add Store' });
});



/* POST addStore page. */
router.post('/', function(req, res, next) {

    // TODO: do some data validation/sanitation here

    if (false) {
        // there are errors. Render the form again with sanitized values/error messages.
        //res.render('addStore', { title: 'Add Store', errors: errors.array(), text: 'there were errors'});
        //return;
    } else {
        // data from form is valid.
        // check if store with same name already exists.
        if (lfStoreExists(req.body.store_name, req.body.store_city, req.body.store_state)) {

        } else {
            // add store
            if(lfAddStore(req.body.store_name, req.body.store_city, req.body.store_state)) {
                storeInserted = true;
            }
        }

    }
    
    // res.render('addStore', { title: 'Add Store', text: req.body.store_name + ' banana5'});        

    res.render('addStore', { title: 'Add Store', data:{
                                                    store_name:  req.body.store_name, 
                                                    store_city: req.body.store_city, 
                                                    store_state: req.body.store_state,
                                                    store_inserted: storeInserted
                                                }});
  });


function lfStoreExists(strStoreName, strStoreCity, strStoreState) {
    return false
}

function lfAddStore(strStoreName, strStoreCity, strStoreState) {

    db.connection.connect(function(err) {
        if (err) {
          console.error('error connecting: ' + err.stack);
          return;
        }
      
        console.log('connected as id ' + db.connection.threadId);
      });

    // VERY temporary insert statement as proof of concept
    var query = "insert into store (name, city, state) VALUES ('" + strStoreName + "', '" + strStoreCity  + "', '" + strStoreState + "')";

    db.connection.query(query, function (error, results, fields) {
        if (error) throw error;
        return false;
    });

    db.connection.end();
    return true;
}
module.exports = router;