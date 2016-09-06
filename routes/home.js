const router = require('express').Router();
const {MongoClient}   = require('mongodb')
var db
MongoClient.connect('mongodb://localhost:27017/caspertuna', (err, taco)=>{
  if(err) throw err;
 db = taco
})


router.get('/', function(req,res) {


   var cursor = db.collection('quotes').find().toArray(function(err,results){
      // console.log(results)
      // renders index.ejs
      res.render('index.ejs', {quotes: results, user: req.session.user})
    })
 })


module.exports = router;
