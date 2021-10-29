

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('projects', { 
    title: 'Projects',
    userName: 'Reggie', 
    displayName: req.user ? req.user.displayName : ''
   });
});

module.exports = router;
