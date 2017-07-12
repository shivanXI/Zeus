var hydraExpress = require ('fwsp-hydra-express');
var config = require('./config.json');
//var app = express()


//app.get('/', function (req, res) {
//	res.send("Hello Sexy Bitch !! :P")
//})

//app.listen(3000, function () {
//	console.log('App listening on port to dock it baby on 3000 !')
//})

function onRegisterRoutes(){
	var express = hydraExpress.getExpress();
	var api = express.Router();

	api.get('/', function(req, res) {
		res.send('Hello World!');
	});
	hydraExpress.registerRoutes({
		'':api
	});
}

