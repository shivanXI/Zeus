'use strict';

var os = require('os');
var nodeStatic = require('node-static');
var http = require('http');
var socketIO = require('socket.io');

var fileServer = new(nodeStatic.Server)();
var app = http.createServer(function(req, res){
	fileServer.serve(req, res);
}).listen(8080);

var io = socketIO.listen(app);
io.sockets.on('connection', function(socket) {

	// convenience function to log server messages to client
	function log() {
		var array = ['Message from server:'];
		array.push.apply(aray, arguments);
		socket.emit('log', array);
	}

	socket.on('message', function(message) {
		log('Client said:', message);
		socket.broadcast.emit('message', message);
	});

	socket.on('create or join', function(room) {
		log('Received request to create or join room for discussion' + room);
		
		var numClients  = io.sockets.sockets.length;
		log('Room ' + room + ' now has ' + numClients + ' client(s)');
	});
})