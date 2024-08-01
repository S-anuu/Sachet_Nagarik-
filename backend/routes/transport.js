var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',(req, res) =>{
  res.render('transportation', {title: 'Transportation'});
});

module.exports = router;