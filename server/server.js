var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');1
var jwt = require('jwt-simple');
var app = express();

var foo = 'dgchvd';

app.use(cors());
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
	res.send(foo);
});

app.get('/details', (req, res) => {
	// get the details from db
	var details = {
		ipAddr: '192.168.0.1',
		subnet: '255.255.255.0',
		networkGateway: '192.168.1.1'
	};

	res.send(details);
});

app.post('/login', (req, res) => {
	var userData = req.body;
	// do a get request to get the user name and pwd
	var userFromDb = {
		userName: 'mounika',
		pwd: 'admin'
	};

	if(!userFromDb || userData.pwd !== userFromDb.pwd) {
		return res.status(401).send({message: 'Email or Password invalid'});
	}

	var payload = {};

	var token = jwt.encode(payload, '123');

	console.log(token);

	res.status(200).send({token: token});
});

app.listen(3000);