var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static('public'));

var server = app.listen(process.env.PORT || 3000,function(){//the server gets created and listens to port 3000
// be accessed on the browser via localhost:portNum
	console.log('Server is on localhost:3000');//prints to the terminal when request from client
});
