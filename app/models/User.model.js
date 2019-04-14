var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
	'fisrtName' : String,
	'lastName' : String,
	'email' : String,
	'type' : Number
});

module.exports = mongoose.model('user', userSchema);
