var Steps = require('../models/steps');

	//create a form
	exports.postSteps = (function(req,res){
		var steps  = new Steps({ //Create new instance of the form
			user: 		req.body.user,
			steps:	 	req.body.steps,
			timestamp:	req.body.timestamp,
		});
		//save user
		steps.save(function(err){
			if(err){
				res.send(err);
			}else{
				res.json({ message: 'Steps created!' });
			}
		});
	});


	//get all users
	exports.getSteps = (function(req,res){
		Steps.find(function(err, steps){
			if(err){
				res.send(err);
			}else{
				res.json(steps);
			}
		});
	});


	//get forms by user id
	exports.getStep = (function(req, res){
		Steps.find({user: req.params.user_id}).sort({ timestamp : 'ascending'}).exec(function(err, steps){
			if(err){
				res.send(err);
			}else if(steps === null){
				res.status(400).send({ error: "No stepdata found" });
			}else{
				res.json(steps)
			}
		});
	});
