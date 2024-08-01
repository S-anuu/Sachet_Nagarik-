var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/queries',function(req, res, next){
  res.render('queries', {title: 'Queries'});
});

router.get('/add', function(req, res, next) {
    res.render('addQuery', { title: 'Add Query'});
  });


module.exports = router;