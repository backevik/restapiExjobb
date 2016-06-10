var Device = require('../models/devices');
var randomString = require('random-string');

	//create a user
	exports.postDevices = (function(req,res){
		var device  = new Device({ //Create new instance of the bear
			ssn: req.body.ssn,
			code: getRandom(6),
			crypt: randomString({length: 12})
		});
		//save user
		device.save(function(err){
			if(err){
				res.send(err);
			}else{
				res.status(200).send({code : device.code });
			}
		});
	});
	
	function getRandom(length) {
		return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
	}
		
	exports.getDevices = (function(req, res){
		Device.find({ssn: req.params.user_id}, function(err, devices){
			if(err){
				res.send(err);
			}else if(devices === null){
				res.status(400).send({ error: "This user does not have any devices" });
			}else{
				res.json(devices);
			}
		});
	});

	exports.getDevice = (function(req, res){
		Device.find({code: req.params.user_id}, function(err, devices){
			if(err){
				res.send(err);
			}else if(devices === null){
				res.status(400).send({ error: "No device found"});
			}else{
				res.json(devices);
			}
		});
	});

	exports.deleteDevice = (function(req, res){
		Device.remove({code:req.params.user_id}, function(err){
			if(err){
				res.send(err);
			}else{
				res.json({ message: 'Device removed!' });
			}
		});
	});
