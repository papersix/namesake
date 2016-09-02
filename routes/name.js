'use strict'
const router = require('express').Router()
// const json = require('../names.json');
const request = require('request');
const _ = require('underscore');
const names = require('../models/nycnamesDB.js')

//

router.get('/namesapi', names.getNames, function(req, res) {
   res.json(res.rows);
});

// app.get('/', (req, res) => {

// })


router.get('/', function(req, res) {
res.render('names',{user: req.session.user});

});

module.exports = router;

