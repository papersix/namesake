'use strict'
const router = require('express').Router()
const json = require('../names.json');
//
router.get('/', function(req, res) {
   res.json(json);
});
//


// router.get('/', function(req, res) {
//    request({
//            method: 'GET',
//            uri: 'https://data.cityofnewyork.us/resource/g374-eanh.json?ethcty=HISPANIC&brth_yr=2011',
//        }, function(err, response, body) {
//            var data = body.substring(body.indexOf('(')+1);
//            data = JSON.parse(data.substring(0,data.length-1));
//            var related = [];
//            _.each(data.d, function(movie, index) {
//                related.push({
//                    Title: movie.l,
//                    Year: movie.y,
//                    Poster: movie.i ? movie.i[0] : ''
//                });
//            });

//            res.json(related);
//        });
// });


module.exports = router;
