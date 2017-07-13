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

/*function onRegisterRoutes() {  
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

hydraExpress.init(config, onRegisterRoutes); */
hydraExpress.init(config, () => {})  
  .then((serviceInfo) => {
    console.log('serviceInfo', serviceInfo);
    hydra.on('message', (message) => {
      let messageReply = hydra.createUMFMessage({
        to: message.frm,
        frm: 'hello:/',
        bdy: {
          msg: `hey man from ${hydra.getServiceName()} - ${hydra.getInstanceID()}`
        }
      });
      hydra.sendMessage(messageReply);
    });
    return 0;
  })
  .catch(err => console.log('err', err)); 