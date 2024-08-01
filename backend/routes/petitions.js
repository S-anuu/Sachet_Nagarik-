var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/petitions',function(req, res, next){
  res.render('petitions', {title: 'Petitions'});
});

router.get('/petitions/add', function(req, res, next) {
    res.render('addPetition', { title: 'Add Petition'});
  });

module.exports = router;