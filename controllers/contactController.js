const mongoose = require('mongoose');
const Contact = mongoose.model('Contact');

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
