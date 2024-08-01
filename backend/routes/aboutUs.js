var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/add', function(req, res, next) {
    res.render('addCommunityEvent', { title: 'Add Community Event'});
  });

module.exports = router;
