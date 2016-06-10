var Message = require('../models/messages');

	//create a user
	exports.postMessage = (function(req,res){
		var message  = new Message({ //Create new instance of the bear
			from: req.body.from,
			text: req.body.text,
			timestamp: req.body.timestamp,
			isSelf: req.body.self
		});
		//save user
		message.save(function(err){
			if(err){
				res.send(err);
			}else{
				res.json({ message: 'Message created!' });
			}
		});
	});
		//get msg by id
	exports.getMessage = (function(req, res){
		Message.find({from: req.params.user_id}).sort({timestamp : 'ascending'}).exec(function(err, message){
			if(err){
				res.send(err);
			}else if(message === null){
				res.status(400).send({ error: "Msg does not exist" });
			}else{
				res.status(200).send(message);
			}
		});
	});
