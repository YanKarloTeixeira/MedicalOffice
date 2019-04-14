var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var CheckListSchema = new Schema({
	'date' : Date,
	'prescribedCheckList' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'PrescribedCheckList'
	},
	'value' : Number
});

module.exports = mongoose.model('CheckList', CheckListSchema);
