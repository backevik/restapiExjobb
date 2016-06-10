var mongoose	= require('mongoose');
var bcrypt	= require('bcrypt-nodejs');
var Schema	= mongoose.Schema;

var AdFormSchema = new mongoose.Schema({
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
	question6: {
		type: String,
		required: true
	},
	question7: {
		type: String,
		required: true
	},
	question8: {
		type: String,
		required: true
	},
	question9: {
		type: String,
		required: true
	},
	question10: {
		type: String,
		required: true
	},
	question11: {
		type: String,
		required: true
	},
	question12: {
		type: String,
		required: true
	},
	question13: {
		type: String,
		required: true
	},
	question14: {
		type: String,
		required: true
	},
	anxietyscore: {
		type: String,
		required: true
	},
	depressionscore: {
		type: String,
		required: true
	},
	timestamp: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('AdForm', AdFormSchema);
