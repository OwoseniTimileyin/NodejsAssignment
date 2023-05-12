/* Module name: dgram-Provides implementation of UDP datagram sockets
Description
The dgram module in Node.js provides a way of working with Datagram sockets. It can be used to 
send messages from one computer/server to another.
*/

// code snippet
const dgram = require('dgram');

const client = dgram.createSocket('udp4');

client.send('Hello, world!', 8080, '127.0.0.1');

client.on('message', (message, remote) => {
console.log('Received message from', remote.address, remote.port);
console.log(message);
});