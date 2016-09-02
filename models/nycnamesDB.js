'use strict'
const request = require('request')

module.exports = {

getNames (req, res, next) {
   request({
          method: 'GET',
          json: true,
          uri: 'https://data.cityofnewyork.us/resource/g374-eanh.json',
          qs: {brth_yr: req.query.brth_yr, ethcty: req.query.ethcty, gndr: req.query.gndr}
       }, function(err, result, body) {


        res.rows = result.body
        next()

       });
   }
};
