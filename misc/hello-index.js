/**
 * Hello World from HTML file
 */

var http = require ('http');
// To read from the filesysten the fs module is need
var fs = require ('fs');

http.createServer (function (request, response) {
	// Two parameters are required for readFile(), a path to a file
	// and a callback function that is call after the file is read
	fs.readFile ('./index.html', function (error, content) {
		if (error) {
			// If there is an error reading the file,
			// it will be handled gracefully here
			response.writeHead(500);
			response.end();
		} else {
			response.writeHead(200, {'Content-type': 'text/html'});
			// Otherwise send the file to the user.
			response.end(content, 'utf-8');
		}
	})
}).listen (8080);
