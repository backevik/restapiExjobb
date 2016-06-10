var mongoose	= require('mongoose');
var Schema	= mongoose.Schema;

var MessageSchema = new mongoose.Schema({
	from: {
		type: String,
		required: true
	},
	isSelf: {
		type: Boolean,
		required: true
	},
	text: {
		type: String,
		required: true
	},
	timestamp: {
		type: String,
		required: true
	},
});
module.exports = mongoose.model('Message', MessageSchema);
