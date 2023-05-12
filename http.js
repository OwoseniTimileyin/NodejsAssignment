/*
Module name: http - To make Node.js act as an http server
Description : The http module in Node.js is a built-in module that allows you to create HTTP servers and 
make HTTP requests. It is a powerful and versatile module that can be used for a variety of tasks, 
such as:
Creating web servers
Making HTTP requests to other servers
Sending and receiving data over HTTP
Handling HTTP errors

*/

// code snippet
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
// Send a response
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello, world!');
});

// Listen on port 3000
server.listen(3000, () => {
console.log('Server listening on port 3000');
});
