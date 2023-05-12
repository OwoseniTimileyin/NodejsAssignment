/*
Name Tls module
Description : The tls module is a built-in module in Node.js that provides an implementation of 
Transport Layer Security (TLS) and Secure Sockets Layer (SSL) protocols for creating secure network 
connections. It provides a way to secure communication between a client and server over a network.
*/

//code snippet
const tls = require('tls');
const fs = require('fs');

const options = {
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem')
};

const server = tls.createServer(options, (socket) => {
  console.log('Server connected');
  socket.write('Welcome to the server!\n');
  socket.setEncoding('utf8');
  socket.on('data', (data) => {
    console.log(`Received data: ${data}`);
    socket.write(`You wrote: ${data}`);
  });
  socket.on('end', () => {
    console.log('Server disconnected');
  });
});

server.listen(8000, () => {
  console.log('Server listening on port 8000');
});