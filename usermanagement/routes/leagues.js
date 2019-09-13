var express = require('express');
var fs = require('fs');
var router = express.Router();


/* GET leagues data */
router.get('/', function(req, res, next) {
        res.render('leagues', { title: 'Leagues' });
    })
    .get('/data', function(req, res, next) {
        var username = req.session.username;
        if (username) {
            res.send(JSON.parse(fs.readFileSync('./data/leagues.json')));
        } else {
            console.log("Home");
            res.redirect('/');
        }
    });

module.exports = router;