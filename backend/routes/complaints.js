var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/complaints',function(req, res, next){
  res.render('complaints', {title: 'Complaints'});
});

router.get('/complaints/add', function(req, res, next) {
    res.render('addComplaints', { title: 'Add Complaints'});
  });


module.exports = router;