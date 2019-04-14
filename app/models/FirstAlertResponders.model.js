var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var FirstAlertRespondersSchema = new Schema({
	'patient' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	},
	'responderEmail' : String,
	'responderPhone' : String,
	'responderName' : String
});

module.exports = mongoose.model('FirstAlertResponders', FirstAlertRespondersSchema);
