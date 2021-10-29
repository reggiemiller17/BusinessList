

var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');


/* GET home page. */
router.get('/', indexController.displayHomePage);


/* Route to display the Login Page. */
router.get('/login', indexController.displayLoginPage);

/* Route to process Login Page. */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* Route to perform User Logout */
router.get('/logout', indexController.performLogout);


module.exports = router;