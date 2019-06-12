const mongoose = require('mongoose');
const Contact = mongoose.model('Contact');
const ContactService = require('../services/contacts.service')



exports.searchContacts = async (req, res) => {

  const contacts = await Contact
  // first find contacts that match
  .find({
    $text: {//$text operator is available on fields w/ 'text' index
    $search: req.query.name
    }
  }, {
    score: { $meta: 'textScore' } // project score field that has closest match to query
  })
  // then sort them
  .sort({
    score: { $meta: 'textScore' } //take meta score value and sort by value
  })
  // limit to only 5 results
  .limit(5);

  //return res.json(contacts);
  res.json(contacts);

};


exports.getContacts = async (req, res) => {
  const page = req.params.page || 1; //home page url = 1
  const limit = 10;
  const skip = (page * limit) - limit; //skip 1st 20 if on page #2, etc...

  // 1. Query the database for a list of all contacts
  const contactsPromise = Contact
    .find()
    .skip(skip)
    .limit(limit)
    .sort({ created: 'desc' }); //sort descending...show latest contact 1st

  const countPromise = Contact.count();//get count of all Contacts in database
//Fire off contactsPromise & countPromise @ same time BUT 'wait' for both to come back
  const [contacts, count] = await Promise.all([contactsPromise, countPromise]); //pass in array of promises
  const pages = Math.ceil(count / limit); //get upper limit of # contacts / how many per page
  if (!contacts.length && skip) {//redirect to last page of pagination if page requested does not exist

    //res.redirect(`/contacts/page/${pages}`);
    return;
  }
  res.json(contacts, page, pages, count);

};
