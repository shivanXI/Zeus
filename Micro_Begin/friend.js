var hydraExpress = require('fwsp-hydra-express');  
var hydra = hydraExpress.getHydra();  
var config = require('./config.json');

config.hydra.serviceName = 'friend';

hydraExpress.init(config, () => {})
	.then((serviceInfo) => {
		console.log('serviceInfo', serviceInfo);

		hydra.on('message', (message) => {
			console.log('message reply', message);
		});

		let message = hydra.createUMFMessage({
			to: 'hello:/', //[get]
			from: 'friend:/',
			body: {}
		});

		hydra.sendMessage(message);

		//return hydra.makeAPIRequest(message)
		//	.than((response) => {
		//		console.log('response', response);
		//	});
	})
	 .catch(err => console.log('err', err));