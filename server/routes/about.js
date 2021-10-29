

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('about', { 
    title: 'About Me',
    userName: 'Reggie', 
    displayName: req.user ? req.user.displayName : ''
   });
});

module.exports = router;
