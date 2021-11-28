var express = require("express");
const grapes_controlers= require('../controllers/grapes'); 
var router = express.Router();

/* GET home page. */
router.get('/', grapes_controlers.grapes_view_all_Page);

/* GET detail grapes page */ 
router.get('/detail', grapes_controlers.grapes_view_one_Page);
// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    } 
/* GET create grapes page */ 
router.get('/create',secured, grapes_controlers.grapes_create_Page);
/* GET create update page */ 
router.get('/update',secured, grapes_controlers.grapes_update_Page); 
/* GET create grapes page */ 
router.get('/delete',secured, grapes_controlers.grapes_delete_Page); 
 




module.exports = router;