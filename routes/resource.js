var express = require('express');
const grapes_controllers= require('../controllers/grapes');  
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var grapes_controller = require('../controllers/grapes'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
router.get('/', grapes_controllers.grapes_view_all_Page );  
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/grapes', grapes_controller.grapes_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/grapes/:id', grapes_controllers.grapes_delete); 
 
// PUT request to update Costume. 
router.put('/grapes/:id', 
grapes_controllers.grapes_update_put); 
 
// GET request for one Costume. 
router.get('/grapes/:id', grapes_controllers.grapes_detail); 
 
// GET request for list of all Costume items. 
router.get('/grapes', grapes_controllers.grapes_list); 
 
module.exports = router; 