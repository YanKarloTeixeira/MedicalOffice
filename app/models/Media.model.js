var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var MediaSchema = new Schema({
	'medicalCondition' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'MedicalCondition'
	},
	'title' : String,
	'url' : String,
	'briefing' : String,
	'mediaType' : String
});

module.exports = mongoose.model('Media', MediaSchema);
