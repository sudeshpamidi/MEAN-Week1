var express = require('express');
var fs = require('fs');
var router = express.Router();


/* GET users listing. */
router.get('/data', function(req, res, next) {
    res.send(JSON.parse(fs.readFileSync('./data/leagues.json')));
});

module.exports = router;