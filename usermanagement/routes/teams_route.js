var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', (req, res, next) => {
        var username = req.session.username;
        if (username) {
            res.render('teams', { title: 'South Windsor Soccer Club', username: username });
        } else {
            res.render('index', { title: 'South Windsor Soccer Club', username: username });
        }
    })
    .get('/data', function(req, res, next) {
        var username = req.session.username;
        if (username) {
            let data = fs.readFileSync("./data/teams.json", "utf8");
            data = JSON.parse(data);
            res.end(JSON.stringify(data));

        } else {
            res.render('index', { title: 'South Windsor Soccer Club', username: username });
        }
    });

module.exports = router;