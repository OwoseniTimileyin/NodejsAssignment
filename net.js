/* 
Module name : net
Description : The net module in Node.js is a built-in module that allows you to create TCP and IPC servers
and clients. It is a powerful and versatile module that can be used for a variety of tasks, such as:

Creating TCP and IPC servers

Making TCP and IPC connections

Sending and receiving data over TCP and IPC

Handling TCP and IPC errors
*/

// code snippet
const net = require('net');

// Create a server
const server = net.createServer((socket) => {
// Send a response
socket.write('Hello, world!');
socket.end();
});

// Listen on port 3000
server.listen(3000, () => {
console.log('Server listening on port 3000');
});