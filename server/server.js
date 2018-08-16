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
		pwd: 'admin'
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
//`

var foo = 'dgchvd';

app.use(cors());
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
	res.send(foo);
});

app.get('/details', (req, res) => {
	res.send(database.details);
});

app.post('/login', (req, res) => {
	var userData = req.body;

	bcrypt.compare(userData.pwd, database.loginData.pwd, (err, matched) => {
		if(!matched) {
			return res.status(401).send({message: 'Email or Password invalid'});
		}
		var payload = {};

		var token = jwt.encode(payload, '123');

		console.log(token);

		res.status(200).send({token: token});
	});
});

app.listen(3000);