var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var gucci_controller = require('../controllers/gucci'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// GUCCI ROUTES /// 
 
// POST request for creating a Gucci.  
router.post('/gucci', gucci_controller.gucci_create_post); 
 
// DELETE request to delete Gucci. 
router.delete('/gucci/:id', gucci_controller.gucci_delete); 
 
// PUT request to update Gucci. 
router.put('/gucci/:id', gucci_controller.gucci_update_put); 
 
// GET request for one Gucci. 
router.get('/gucci/:id', gucci_controller.gucci_detail); 
 
// GET request for list of all Gucci items. 
router.get('/gucci', gucci_controller.gucci_list); 
 
module.exports = router;