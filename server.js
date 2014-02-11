//var http = require("http");
//
//http.createServer(function(request, response) {
//    response.writeHead(200, {"Content-Type": "text/plain"});
//    response.write("Hello World");
//    response.end();
//}).listen(8888);

var connect = require('connect'),
    http = require('http');

connect()
    .use(connect.static('public'))
    .listen(8888);