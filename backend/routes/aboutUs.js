var express = require('express');
var router = express.Router();

/* GET AboutUs page. */
router.get('/about-us',function(req, res, next){
  res.render('aboutUs', {title: 'About Us'});
});

module.exports = router;
