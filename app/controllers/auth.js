var passport		= require('passport');
var BasicStrategy	= require('passport-http').BasicStrategy;
var User		= require('../models/user');


passport.use(new BasicStrategy(
	function(code, crypt, callback){
		User.findOne({ code: crypt }, function(err,user){
			if(err) { return callback(err); }

			//No user with that name found
			if(!user){ return callback(null, false); }

			// Make sure pw is correct
			user.verifyCrypt(crypt, function(err, isMatch){
				if(err){ return callback(err);}

				//password did not match
				if(!isMatch) {return callback(null, false);}

				//success
				return callback(null, user);
			});
		});
	}
));
exports.isAuthenticated = passport.authenticate('basic', { session : false });
