/*
Name : Zlib module
Decsription :  Zlib is a built-in module in Node.js that provides compression or decompression
properties on texts and buffers in a program. It is a pre-built Node.js module so don't require
to install it as a dependency. To compress a string, you can use the zlib.deflate() method. 
The zlib.deflate() method takes a string as its input and returns a compressed buffer.
*/

// code snippet 
const zlib = require('zlib');

// Compress a string
const compressedString = zlib.deflate('This is a test string.');

// Decompress a buffer
const decompressedString = zlib.inflate(compressedString);

console.log(decompressedString); // This is a test string.