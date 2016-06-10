var mongoose	= require('mongoose');
var bcrypt	= require('bcrypt-nodejs');
var Schema	= mongoose.Schema;

var UserSchema = new mongoose.Schema({
	ssn: {
		type: String,
		required: true
	},
	fname: {
		type: String,
		required: true
	},
	surname: {
		type: String,
		required: true
	},
	group: {
		type: String,
		required: true
	}
});
module.exports = mongoose.model('User', UserSchema);
