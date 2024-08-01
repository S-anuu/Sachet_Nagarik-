var express = require('express');
var router = express.Router();

/* GET AboutUs page. */
router.get('/climate-change',function(req, res, next){
  res.render('climateChange', {title: 'Climate Change'});
});

module.exports = router;