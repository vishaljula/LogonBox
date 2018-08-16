var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');1
var jwt = require('jwt-simple');
var bcrypt = require('bcrypt-nodejs');
var app = express();

// do a get request to get the user name and pwd
var database = {
	loginData: {
		userName: 'mounika',
		pwd: 'admin',
		userId: '8143pp'
	},
	details: {
		ipAddr: '192.168.0.1',
		subnet: '255.255.255.0',
		networkGateway: '192.168.1.1'
	}
};

//
bcrypt.hash(database.loginData.pwd, null, null, (err, hash) => {
	database.loginData.pwd = hash;
});
//

app.use(cors());
app.use(bodyParser.json());

function validateAuthentication(req, res, next) {
	if(!req.header('authorization')) {
		return res.status(401).send({message: 'Unauthorized. Missing Auth Header'});
	}

	var token = req.header('authorization').split(' ')[1];
	var payload = jwt.decode(token, '123');

	if(!payload) {
		return res.status(401).send({message: 'Unauthorized. Auth Header Invalid'});
	}

	req.userId = payload.sub;

	next();
}

app.get('/details', validateAuthentication, (req, res) => {
	console.log(req.userId);
	res.send(database.details);
});

app.post('/login', (req, res) => {
	var userData = req.body;

	bcrypt.compare(userData.pwd, database.loginData.pwd, (err, matched) => {
		if(!matched || userData.userName !== database.loginData.userName) {
			return res.status(401).send({message: 'Email or Password invalid'});
		}
		var payload = {sub: database.loginData.userId};

		var token = jwt.encode(payload, '123');

		res.status(200).send({token: token});
	});
});

app.post('/updateDetails', (req, res) => {
	var detailsData = req.body;

	// update details to backend
	database.details.ipAddr = detailsData.details.ipAddr;
	database.details.subnet = detailsData.details.subnet;
	database.details.networkGateway = detailsData.details.networkGateway;

});

app.listen(3000);