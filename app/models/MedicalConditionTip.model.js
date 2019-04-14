var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var MedicalConditionTipSchema = new Schema({
	'media' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'Media'
	},
	'medicalCondition' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'MedicalCondition'
	}
});

module.exports = mongoose.model('MedicalConditionTip', MedicalConditionTipSchema);
