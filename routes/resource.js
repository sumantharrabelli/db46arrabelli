var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../contollers/api'); 
var gucci_controller = require('../contollers/gucci'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// GUCCI ROUTES /// 
 
// POST request for creating a Gucci.  
router.post('/resource/gucci', gucci_controller.gucci_create_post); 
 
// DELETE request to delete Gucci. 
router.delete('/resource/guccis/:id', gucci_controller.gucci_delete); 
 
// PUT request to update Gucci. 
router.put('/resource/guccis/:id', 
gucci_controller.gucci_update_put); 
 
// GET request for one Gucci. 
router.get('/resource/guccis/:id', gucci_controller.gucci_detail); 
 
// GET request for list of all Gucci items. 
router.get('/resource/guccis', gucci_controller.gucci_list); 
 
module.exports = router;