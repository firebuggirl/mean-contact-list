var Contact = require('../models/Contact');

//_this = this;


exports.getContacts = async function(query, page, limit){
    var options = {
        page,
        limit
    }
    try {
        var contacts = await Contact.paginate(query, options);
        return contacts;
    } catch (e) {
        throw Error('Error while Paginating Contacts');
    }
}
