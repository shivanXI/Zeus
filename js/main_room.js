'use strict';

var isInitiator;

window.room = prompt("Enter room name:");

var socket = io.connect();

if (room !== "") {
	console.log('Message from client: Asking to join room ' + room);
	socket.emit('create or join', room);
}