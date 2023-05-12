/*
Module name: buffer-To handle binary
Description
The buffer module in Node.js provides a way to create and manipulate binary data. A buffer is a sequence
of bytes that can be used to store any type of binary data, such as images, audio, or video.
*/

// code snippet
const { Buffer } = require('buffer');

// Create a new buffer of size 16
const buffer = Buffer.alloc(16);

// Write some data to the buffer
buffer.write('Hello, world!');

// Print the contents of the buffer
console.log(buffer.toString()); // Hello, world!