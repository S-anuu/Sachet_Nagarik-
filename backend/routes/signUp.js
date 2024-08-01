var express = require('express');
var router = express.Router();

/* GET SignUP page. */
router.get('/sign-up',(req, res) =>{
  res.render('signUp', {title: 'Sign Up'});
});

module.exports = router;