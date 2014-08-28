/**
 * dynamic-index.js
 */

var http = require("http");
var fs = require("fs");
var inc = 0;

http.createServer(function(request, response) {
	// The file is loaded as before
	fs.readFile('./index.html', function(error, content) {
		if (error) {
			response.writeHead(500);
			response.end();
		} else {
			response.writeHead(200, {'Content-Type:': 'text/html'});
			// A simple dynamic page is implemented by replacing all
			// instances of {0} with the value of a pre-incremented inc.
			response.end(content.toString().replace(/\{0\}/g, ++inc), 'utf-8');
		}
	});
}).listen(8080);