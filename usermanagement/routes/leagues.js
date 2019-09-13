var express = require('express');
var fs = require('fs');
var router = express.Router();


/* GET leagues data */
router.get('/', function(req, res, next) {
        res.render('leagues', { title: 'Leagues' });
    })
    .get('/data', function(req, res, next) {
        res.send(JSON.parse(fs.readFileSync('./data/leagues.json')));
    });

module.exports = router;