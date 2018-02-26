var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('epc_ui/index', { title: 'User interface' });
});

module.exports = router;
