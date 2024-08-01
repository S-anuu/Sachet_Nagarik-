var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/community-events',function(req, res, next){
  res.render('communityEvents', {title: 'Community Events'});
});

router.get('/community-events/add', function(req, res, next) {
    res.render('addCommunityEvent', { title: 'Add Community Event'});
  });

module.exports = router;