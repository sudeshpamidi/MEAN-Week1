var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'South Windsor Soccer Club', body: 'This is the home page' });
});

module.exports = router;