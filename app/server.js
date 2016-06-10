// BASE SETUP
// =============================================================================


// call the packages we need
var express		= require('express');        // call express
var app			= express();                 // define our app using express
var cors 		= require('cors');

var bodyParser		= require('body-parser');
var mongoose		= require('mongoose');
var morgan		= require('morgan');
var passport		= require('passport');
var User		= require('./models/user');
var Device		= require('./models/devices');

var messageController	= require('./controllers/message');
var deviceController	= require('./controllers/device');
var stepsController	= require('./controllers/steps');
var adFormController	= require('./controllers/adForm');
var asthmaFormController	= require('./controllers/asthmaForm');
var userController	= require('./controllers/user');
var jwt			= require('jsonwebtoken');

mongoose.connect('mongodb://admin:admin@ds013300.mlab.com:13300/examensarbete');

var conn = mongoose.connection;

conn.on('error',console.error.bind(console, 'connection error:'));

conn.once('open',function(){

});



// CONFIG
// ============================================================================

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(passport.initialize());

app.use(morgan('dev'));
app.use(cors());

var port = process.env.PORT || 8080;        // set our port


// ROUTES FOR OUR API
// =============================================================================

var router = express.Router();              // get an instance of the express Router

router.route('/users/:user_id').get(userController.getUser);

router.route('/devices/connect/:user_id').get(deviceController.getDevice);

router.route('/users').post(userController.postUsers);

router.route('/devices')
	.post(deviceController.postDevices);

router.use( function(req,res,next){
	var found = false;
	var header = false;
	if(req.headers['key']){
		Device.findOne({ crypt: req.headers['key'] }, function (err, docs){
			if(docs === null){
				res.status(401).send({ error: "Wrong key" });

			}else{
				next();
			}
		});
	}else{
		res.status(400).send({ error: "No key header found" });
	}
});

router.route('/users')
	.get( userController.getUsers);

router.route('/users/group/user')
	.get( userController.getUsersNoAdmins); 

router.route('/users/:user_id')
	.put(userController.putUser)
	.delete(userController.deleteUser);

router.route('/users/devices/:user_id')
	.get(deviceController.getDevices)
	.delete(deviceController.deleteDevice);
router.route('/forms/asthma')
	.get( asthmaFormController.getForms)
	.post( asthmaFormController.postForms);

router.route('/forms/asthma/:user_id')
	.get(asthmaFormController.getForm);

router.route('/forms/ad')
	.get( adFormController.getForms)
	.post( adFormController.postForms);

router.route('/forms/ad/:user_id')
	.get( adFormController.getForm);

router.route('/steps')
	.get( stepsController.getSteps)
	.post(stepsController.postSteps);

router.route('/steps/:user_id')
	.get(stepsController.getStep);

router.route('/message/:user_id')
	.get(messageController.getMessage);

router.route('/message')
	.post(messageController.postMessage);
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server is live on ' + port);
