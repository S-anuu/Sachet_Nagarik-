var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/drinking-water',function(req, res, next){
  res.render('drinkingWater', {title: 'Drinking Water'});
});

module.exports = router;