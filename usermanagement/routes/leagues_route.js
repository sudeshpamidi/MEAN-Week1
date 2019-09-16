var express = require('express');
var fs = require('fs');
var router = express.Router();


/* GET leagues data */
router.get('/', function(req, res, next) {
        var username = req.session.username;
        if (username) {
            res.render('leagues', { title: 'Leagues', username: username });
        } else {
            res.render('index', { title: 'home', username: username });
        }

    })
    .get('/data', function(req, res, next) {
        var username = req.session.username;
        if (username) {
            res.send(JSON.parse(fs.readFileSync('./data/leagues.json')));
        } else {
            res.render('index', { title: 'home', username: username });
        }
    });

module.exports = router;