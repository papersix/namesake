const router = require('express').Router();

router.get('/', function(req,res) {
  res.render('about',{user: req.session.user});
});

module.exports = router;
