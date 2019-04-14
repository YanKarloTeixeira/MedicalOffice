var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var VitalSignSchema = new Schema({
	'VitalSignName' : String
});

module.exports = mongoose.model('VitalSign', VitalSignSchema);
