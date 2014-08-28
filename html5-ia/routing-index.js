/**
 * routing-index.js
 */

var http = require("http");
var fs = require("fs");
var inc = 0;

http.createServer(
		function(request, response) {
			// Only respond with the file to requests for index.html
			// or the default document.
			if (request.url === '/index.html' || request.url === '/') {
				// The file is loaded as before
				fs.readFile('./index.html', function(error, content) {
					if (error) {
						response.writeHead(500);
						response.end();
					} else {
						response.writeHead(200, {
							'Content-Type:' : 'text/html'
						});
						// A simple dynamic page is implemented by replacing all
						// instances of {0} with the value of a pre-incremented
						// inc.
						response.end(content.toString()
								.replace(/\{0\}/g, ++inc), 'utf-8');
					}
				});
			} else {
				response.writeHead(404);
				console.log(request.url + ' not found');
			}
		}).listen(8080);