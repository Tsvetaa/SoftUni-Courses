const Contact = require("./models/Contact");
let Contacts = require("./models/Contact");

let phonebook = [
	new Contacts("Peter", "+1-555-1793"),
	new Contacts("John", "+1-555-7746")
];

function getData() {
	return phonebook; 
}

function saveContact(name, number) {
	let contact = new Contact(name, number);
	phonebook.push(contact);
}

module.exports = {
	getData,
	saveContact
};