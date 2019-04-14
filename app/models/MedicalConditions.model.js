var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var MedicalConditionsSchema = new Schema({
	'Name' : String,
	'description' : String
});

module.exports = mongoose.model('MedicalConditions', MedicalConditionsSchema);
