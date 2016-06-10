var AdForm = require('../models/adForm');

	//create a form
	exports.postForms = (function(req,res){
		var form  = new AdForm({ //Create new instance of the form
			user: 		req.body.user,
			question1: 	req.body.question1,
			question2:	req.body.question2,
			question3:	req.body.question3,
			question4:	req.body.question4,
			question5:	req.body.question5,
			question6:	req.body.question6,
			question7:	req.body.question7,
			question8:	req.body.question8,
			question9:	req.body.question9,
			question10:	req.body.question10,
			question11:	req.body.question11,
			question12:	req.body.question12,
			question13:	req.body.question13,
			question14:	req.body.question14,
			anxietyscore:	req.body.anxietyscore,
			depressionscore:req.body.depressionscore,
			timestamp:	req.body.timestamp
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
		AdForm.find(function(err, forms){
			if(err){
				res.send(err);
			}else{
				res.json(forms);
			}
		});
	});

	//get forms by user id
	exports.getForm = (function(req, res){
		AdForm.find({user: req.params.user_id}).sort({timestamp:'ascending'}).exec(function(err, forms){
			if(err){
				res.send(err);
			}else if(forms === null){
				res.status(400).send({ error: "No forms found" });
			}else{
				res.json(forms)
			}
		});
	});
