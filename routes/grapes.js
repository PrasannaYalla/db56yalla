var express = require("express");
const grapes_controlers= require('../controllers/grapes'); 
var router = express.Router();

/* GET home page. */
router.get('/', grapes_controlers.grapes_view_all_Page);

/* GET detail grapes page */ 
router.get('/detail', grapes_controlers.grapes_view_one_Page); 
/* GET create grapes page */ 
router.get('/create', grapes_controlers.grapes_create_Page);
/* GET create update page */ 
router.get('/update', grapes_controlers.grapes_update_Page); 
/* GET create grapes page */ 
router.get('/delete', grapes_controlers.grapes_delete_Page); 
 




module.exports = router;