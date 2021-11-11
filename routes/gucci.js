var express = require('express'); 
const gucci_controlers= require('../contollers/gucci'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', gucci_controlers.gucci_view_all_Page ); 
module.exports = router; 