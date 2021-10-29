

let mongoose = require('mongoose');

// model class
let contactModel = mongoose.Schema({
    Contact_Name: String,
    Contact_Number: String,
    Email_Address: String
},
{
    collection: "contact"
});

module.exports = mongoose.model('contact', contactModel);