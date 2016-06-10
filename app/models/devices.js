var mongoose	= require('mongoose');
var bcrypt	= require('bcrypt-nodejs');
var Schema	= mongoose.Schema;


var DeviceSchema = new mongoose.Schema({
	ssn: {
		type: String,
		required: true
	},
	code: {
		type: String
	},
	crypt: {
		type: String
	}
});
module.exports = mongoose.model('Device', DeviceSchema);
