var AsthmaForm = require('../models/asthmaForm');

	//create a form
	exports.postForms = (function(req,res){
		var form  = new AsthmaForm({ //Create new instance of the form
			user: 		req.body.user,
			question1: 	req.body.question1,
			question2:	req.body.question2,
			question3:	req.body.question3,
			question4:	req.body.question4,
			question5:	req.body.question5,
			score:		req.body.score,
			timestamp: 	req.body.timestamp,
		});
		//save user
		form.save(function(err){
			if(err){
				res.send(err);
			}else{
				res.json({ message: 'Form created!' });
			}
		});
	});


	//get all users
	exports.getForms = (function(req,res){
		AsthmaForm.find(function(err, forms){
			if(err){
				res.send(err);
			}else{
				res.json(forms);
			}
		});
	});

	//get forms by user id
	exports.getForm = (function(req, res){
		AsthmaForm.find({user: req.params.user_id}).sort({timestamp: 'ascending'}).exec(function(err, forms){
			if(err){
				res.send(err);
			}else if(forms === null){
				res.status(400).send({ error: "No forms found" });
			}else{
				res.json(forms)
			}
		});
	});
