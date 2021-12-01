var express = require('express');
const gucci_controllers = require('../controllers/gucci');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}

///* GET home page. */
//router.get('/', function (req, res, next) {
//  res.render('gucci', { title: 'Search Results for guccis' });
//});

/* GET guccis */
router.get('/', gucci_controllers.gucci_view_all_Page);
/* GET detail gucci page */
router.get('/detail', gucci_controllers.gucci_view_one_Page);
/* GET create gucci page */
router.get('/create', secured, gucci_controllers.gucci_create_Page);
/* GET create update page */
router.get('/update', secured, gucci_controllers.gucci_update_Page);
/* GET create delete page */
router.get('/delete', secured, gucci_controllers.gucci_delete_Page);
/* GET details with id of gucci page */
router.get('/gucci/:id', gucci_controllers.gucci_detail);
/* DELETE details with id of gucci page */
router.get('/gucci/:id', gucci_controllers.gucci_delete);

module.exports = router;
