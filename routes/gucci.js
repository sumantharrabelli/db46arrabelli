var express = require('express');
const gucci_controllers = require('../controllers/gucci');
var router = express.Router();

///* GET home page. */
//router.get('/', function (req, res, next) {
//  res.render('gucci', { title: 'Search Results for guccis' });
//});

/* GET guccis */
router.get('/', gucci_controllers.gucci_view_all_Page);
router.get('/gucci/:id', gucci_controllers.gucci_detail);
/* GET detail gucci page */
router.get('/detail', gucci_controllers.gucci_view_one_Page);
/* GET create gucci page */
router.get('/create', gucci_controllers.gucci_create_Page);

/* GET create update page */
router.get('/update', gucci_controllers.gucci_update_Page);

module.exports = router;
