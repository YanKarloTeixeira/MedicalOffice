var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var VisitSchema = new Schema({
	'date' : Date,
	'professional' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	},
	'patient' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	}
});

module.exports = mongoose.model('Visit', VisitSchema);
