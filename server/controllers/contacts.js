
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//route to the model
let Contact = require('../models/contacts');

module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, ContactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('contacts/list', {title: 'Contacts List', ContactsList: ContactList, displayName: req.user ? req.user.displayName : ''});
        }
    });
}

// Diplay Contact add page
module.exports.displayAddPage = (req, res, next) => {
    res.render('contacts/add', {title: 'Add Contact', displayName: req.user ? req.user.displayName : ''})
}

// processing contact add page
module.exports.processAddPage = (req, res, next) => {
    let newContact = Contact({
        "Contact_Name": req.body.Contact_Name,
        "Contact_Number": req.body.Contact_Number,
        "Email_Address": req.body.Email_Address
    });

    Contact.create(newContact, (err, Contact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/contact-list')
        }
    });
}

// display edit contact page
module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, editContact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('contacts/edit', {title: 'Edit Contact', ContactsList: editContact, displayName: req.user ? req.user.displayName : ''})
        }
    });
}

// processing edit contact page
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedContact = Contact({
        "_id": id,
        "Contact_Name": req.body.Contact_Name,
        "Contact_Number": req.body.Contact_Number,
        "Email_Address": req.body.Email_Address
    });

    Contact.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/contact-list')
        }
    });
}

// module to delete contact
module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contact.remove ({_id: id}, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/contact-list')
        }
    });
}