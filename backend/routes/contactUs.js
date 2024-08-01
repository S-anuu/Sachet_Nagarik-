var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/contact-us',function(req, res, next){
  res.render('contactUs', {title: 'contactUs'});
});

module.exports = router;