var mongoose = require('mongoose');


var ContactsSchema = new mongoose.Schema({

    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    phone: {
      type: String
    },
    address:{
      type: String
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    zipcode: {
      type: String
    }

});


// Define our indexes
ContactsSchema.index({
  name: 'text', //index name field
  state: 'text' //index description field
});//


//ContactsSchema.plugin(mongoosePaginate);

var Contact = mongoose.model('Contact', ContactsSchema);//model method creates schema
module.exports = Contact;
