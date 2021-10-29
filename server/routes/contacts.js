

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');



// // route to Contacts model
let contactsController = require('../controllers/contacts');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}


/* Route Contacts list. */
router.get('/', requireAuth, contactsController.displayContactList);

/* Route to display the create Contacts list. */
router.get('/add', requireAuth, contactsController.displayAddPage);

/* Route to process Contacts list. */
router.post('/add', requireAuth, contactsController.processAddPage);

/* Route to display the edit Contacts list. */
router.get('/edit/:id', requireAuth, contactsController.displayEditPage);

/* Route to process the edit Contacts list. */
router.post('/edit/:id', requireAuth, contactsController.processEditPage);

/* Route to delete the Contact */
router.get('/delete/:id', requireAuth, contactsController.performDelete);


module.exports = router;