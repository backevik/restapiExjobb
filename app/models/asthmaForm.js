var mongoose	= require('mongoose');
var bcrypt	= require('bcrypt-nodejs');
var Schema	= mongoose.Schema;

var AsthmaFormSchema = new mongoose.Schema({
	user: {
		type: String,
		required: true
	},
	question1: {
		type: String,
		required: true
	},
	question2: {
		type: String,
		required: true
	},
	question3: {
		type: String,
		required: true
	},
	question4: {
		type: String,
		required: true
	},
	question5: {
		type: String,
		required: true
	},
	score: {
		type: String,
		required: true
	},
	timestamp: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('AsthmaForm', AsthmaFormSchema);
