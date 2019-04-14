var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PatientTipSchema = new Schema({
	'media' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'Media'
	},
	'patient' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	}
});

module.exports = mongoose.model('PatientTip', PatientTipSchema);
