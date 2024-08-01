var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',(req, res) =>{
  res.render('index', {title: 'index'});
});

router.get('/about-us',function(req, res, next){
  res.render('aboutUs', {title: 'About Us'});
});

router.get('/climate-change',function(req, res, next){
  res.render('climateChange', {title: 'Climate Change'});
});



module.exports = router;
