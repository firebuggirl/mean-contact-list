const mongoose = require('mongoose');
const Contact = mongoose.model('Contact');
const ContactService = require('../services/contacts.service')



exports.searchContacts = async (req, res) => {

  const contacts = await Contact
  // first find contacts that match
  .find({
    $text: {//$text operator is available on fields w/ 'text' index
    $search: req.query.name
    // $search: ''
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


// exports.getContacts = async function(req, res, next){
//
//     var page = req.query.page ? req.query.page : 1
//     var limit = req.query.limit ? req.query.limit : 10;
//
//     console.log(page, limit)
//
//     try{
//         var contacts = await ContactsService.getContacts({}, page, limit)
//         return res.status(200).json({status: 200, data: contacts, message: "Succesfully Contacts Recieved"});
//     }catch(e){
//         return res.status(400).json({status: 400, message: e.message});
//     }
// }
