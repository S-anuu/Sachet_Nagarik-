var express = require('express');
var router = express.Router();

/* GET Transportation page. */
router.get('/women-right',function(req, res, next){
  res.render('womenRight', {title: "Women's Right"});
});

module.exports = router;