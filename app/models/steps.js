var mongoose	= require('mongoose');
var bcrypt	= require('bcrypt-nodejs');
var Schema	= mongoose.Schema;

var StepsSchema = new mongoose.Schema({
	user: {
		type: String,
		required: true
	},
	steps: {
		type: String,
		required: true
	},
	timestamp: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Steps', StepsSchema);
