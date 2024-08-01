var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/polls',function(req, res, next){
  res.render('polls', {title: 'Polls'});
});

router.get('/create', function(req, res, next) {
    res.render('createPoll', { title: 'Create Poll'});
  });

module.exports = router;