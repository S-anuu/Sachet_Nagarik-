var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/community-event',function(req, res, next){
  res.render('communityEvents', {title: 'Community Events'});
});

router.get('/add', function(req, res, next) {
    res.render('addCommunityEvent', { title: 'Add Community Event'});
  });

module.exports = router;