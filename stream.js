/*
Module name: stream-To handle streaming data 
Description : The stream module in Node.js provides a high-level abstraction for working with streams of data. 
A stream is a sequence of data that can be read from or written to. Streams are often used to represent things
like files, network connections, and user input.
The stream module provides a number of classes that can be used to create and work with streams. 
The most basic stream class is the Stream class. This class provides a number of methods for reading 
and writing data to a stream.
*/
//code snippet
//The following code reads a file line by line:
const fs = require('fs');

const stream = fs.createReadStream('myfile.txt');

stream.on('data', (chunk) => {
console.log(chunk);
});

stream.on('end', () => {
console.log('End of file');
});
