var express = require('express');
var router  = express.Router();
//var db      = require('../db.js');

const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

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
        /*if (lfStoreExists(req.body.store_name, req.body.store_city, req.body.store_state)) {

        } else {
            // add store
            lfAddStore(req.body.store_name, req.body.store_city, req.body.store_state);
        }*/

    }
    
    // res.render('addStore', { title: 'Add Store', text: req.body.store_name + ' banana5'});        

    res.render('addStore', { title: 'Add Store', items:{store_name:  req.body.store_name, store_city: req.body.store_city, store_state: req.body.store_state}});
  });


function lfStoreExists(strStoreName, strStoreCity, strStoreState) {
    return false
}

function lfAddStore(strStoreName, strStoreCity, strStoreState) {
      
}
module.exports = router;