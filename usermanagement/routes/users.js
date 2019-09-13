var express = require('express');
var router = express.Router();
var fs = require('fs');

var utils = require("../utils/util");


/* GET login pages. */
router.get('/', function(req, res, next) {
        res.send('respond with a resource');
    })
    .get('/login', function(req, res, next) {
        res.render('login', { title: 'Login' });
    })
    .post('/login', function(req, res, next) {
        var auth = utils.authorize(req.body.username, req.body.password)
        if (auth) {
            res.status(200).send('Success');
        } else
            res.status(404).send("Fail");
    });

/* GET users listing. */
router.get('/register', function(req, res, next) {
        res.send('respond with a resource');
    })
    .post('/register', function(req, res, next) {
        var user = utils.insertUser(req.body.username, req.body.password, req.body.email);
        if (user) {
            res.send(user);
        } else {
            res.status(404).send("Duplicate user");
        }


    });


module.exports = router;