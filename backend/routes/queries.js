var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',(req, res) =>{
  res.render('queries', {title: 'Queries'});
});

module.exports = router;