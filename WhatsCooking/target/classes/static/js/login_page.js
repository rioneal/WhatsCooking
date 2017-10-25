var express = require('express'); 
var router = express.Router();


var mongoose = require('mongoose');

var hash = require('password-hash');

var bodyParser = require('body-parser');
var multer = require('multer'); 
var multiform = multer();

var loginSchema = mongoose.Schema({
	_id: String,
	email: String, 
    password: String
});

var loginModel = mongoose.model('login', loginSchema, 'accounts');


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.use(multiform.array());

router.get('', function(req, res){
	res.sendFile(__dirname + '/login.html');
});

router.post('', function(req, res){
	var userLogin = req.body; 
	console.log(userLogin.inputEmail); 
	console.log(userLogin.inputPassword);
	
	loginModel.findOne({'email' : userLogin.inputEmail}, function(err, loginInfo){
		if(hash.verify(userLogin.inputPassword, loginInfo.password)){
			return res.redirect("/home/account_page");
		}
		else{return res.send("wrong password/error");}
	});
	
});


module.exports = router; 