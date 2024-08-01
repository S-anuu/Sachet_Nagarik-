var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',(req, res) =>{
  res.render('complaints', {title: 'Complaints'});
});

module.exports = router;