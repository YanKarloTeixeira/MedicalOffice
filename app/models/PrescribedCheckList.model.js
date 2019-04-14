var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PrescribedCheckListSchema = new Schema({
	'professional' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	},
	'patient' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	},
	'vitalSign' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'VitalSign'
	}
});

module.exports = mongoose.model('PrescribedCheckList', PrescribedCheckListSchema);
