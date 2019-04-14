var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var MedicalConditionsCheckListSchema = new Schema({
	'medicalCondition' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'MedicalCondition'
	},
	'vitalSign' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'VitalSign'
	},
	'logicalOperator' : String,
	'value' : Number
});

module.exports = mongoose.model('MedicalConditionsCheckList', MedicalConditionsCheckListSchema);
