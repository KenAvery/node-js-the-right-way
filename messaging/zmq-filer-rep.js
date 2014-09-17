/*******************************************************************************
 * Excerpted from "Node.js the Right Way", published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training
 * material, courses, books, articles, and the like. Contact us if you are in
 * doubt. We make no guarantees that this code is fit for any purpose. Visit
 * http://www.pragmaticprogrammer.com/titles/jwnode for more book information.
 ******************************************************************************/
'use strict';

var fs = require('fs');
var zmq = require('zmq');

// socket to reply to client requests
var responder = zmq.createSocket('rep');

// handle incoming requests
responder.on('message', function(data) {
	// parse incoming message
	let
	request = JSON.parse(data);
	console.log('Received request to get: ' + request.path);

	// read file and reply with content
	fs.readFile(request.path, function(err, content) {
		console.log('Sending response content');
		responder.send(JSON.stringify({
			content : content.toString(),
			timestamp : Date.now(),
			pid : process.pid
		}));
	});

});

// close the responder when the Node process ends
process.on('SIGINT', function() {
	console.log('Shutting down...');
	responder.close();
	process.exit()
});

// listen on TCP port 5433
responder.bindSync('tcp://*:5433');
