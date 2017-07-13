/*var express = require('express')  
var app = express()

app.get('/', function (req, res) {  
  res.send('WhatsUp Dude!!')
})

app.listen(3000, function () {  
  console.log('App is listening where are you port 3000! :P')
})*/
var hydraExpress = require('fwsp-hydra-express');
var hydra = hydraExpress.getHydra();
var config = require('./config.json');

function onRegisterRoutes() {  
  var express = hydraExpress.getExpress();
  var api = express.Router();

  api.get('/', function(req, res) {
    res.send({
    	msg: 'WhatsUp Dude!! ${hydra.getServiceName()} - ${hydra.getInstanceID()}'
    });
  });
  hydraExpress.registerRoutes({
    '': api
  });
}

hydraExpress.init(config, onRegisterRoutes);  