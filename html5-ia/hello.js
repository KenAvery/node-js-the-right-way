/**
 * Hello World
 */

// Most functionality in Node is implemented through a system
// of modules; here the built-in http module is loaded
var http = require('http');

// The http module has a create server method, which is passed
// a handler function that will be called when requests are made
http.createServer(function(request, response) {
	response.writeHead(200);
	// The response itself is a simple web page; each line is
	// explicitly written into the response.
	response.write("<!DOCTYPE html");
	response.write("<html>");
	response.write("<head>");
	response.write("<title>Hello</title>");
	response.write("<head>");
	response.write("<body>");
	response.write("Hello World");
	response.write("</body");
	response.write("</html>");
	// After the server is created, it's set to listen on port 8080; any
	// requests to http://localhost:8080 will now be passed to the handler
	// function
}).listen(8080);
