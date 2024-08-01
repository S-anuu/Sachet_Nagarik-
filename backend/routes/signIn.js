var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/sign-in',function(req, res, next){
  res.render('signIn', {title: 'Sign In'});
});

module.exports = router;