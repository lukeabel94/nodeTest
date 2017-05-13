var http = require("http");
var express = require('express');
http.createServer(function(request, response){
  // Send HTTP header
  // HTTP status : 200: OK
  // Consent Type: text/plain
  response.writeHead(200, {'Content-Type' : 'text/plain'});

  // Send the response body as "Hello World"
  response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log("Server running at http://127.0.0.1:8081/");