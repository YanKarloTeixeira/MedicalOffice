var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var VisitVitalSignsSchema = new Schema({
	'Visit' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'Visit'
	},
	'vitalSign' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'VitalSign'
	},
	'value' : Number
});

module.exports = mongoose.model('VisitVitalSigns', VisitVitalSignsSchema);
