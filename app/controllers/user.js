var User = require('../models/user');

	//create a user
	exports.postUsers = (function(req,res){
		var user  = new User({ //Create new instance of the bear
			ssn: req.body.ssn,
			fname: req.body.fname,
			surname: req.body.surname,
			group: req.body.group
		});
		//save user
		user.save(function(err){
			if(err){
				res.send(err);
			}else{
				res.json({ message: 'User created!' });
			}
		});
	});
	
	//get all users
	exports.getUsersNoAdmins = (function(req,res){
		User.find(({group : 'user'}),function(err, users){
			if(err){
				res.send(err);
			}else{
				res.json(users);
			}
		});
	});

	//get all users
	exports.getUsers = (function(req,res){
		User.find(function(err, users){
			if(err){
				res.send(err);
			}else{
				res.json(users);
			}
		});
	});

	

	//get user by id
	exports.getUser = (function(req, res){
		User.findOne({ssn: req.params.user_id} , function(err, user){
			if(err){
				res.send(err);
			}else if(user === null){
				res.status(400).send({ error: "User does not exist" });
			}else{
				res.status(200).send({key: user.code});
			}
		});
	});

	//update user by id
	exports.putUser = (function(req,res){
		User.findOneAndUpdate({ssn: req.params.user_id},req.body,{upsert:true}, function(err,user){
			if(err){
				res.send(err);
			}else{
				res.send("Success!");
			}
		
		});
	});

	exports.deleteUser = (function(req, res){
		User.remove({ssn:req.params.user_id}, function(err){
			if(err){
				res.send(err);
			}else{
				res.json({ message: 'User removed!' });
			}
		});
	});
