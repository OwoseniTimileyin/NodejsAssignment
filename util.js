/*
Name: Util module
Description :  Util is a built-in module in Node.js that provides several utility functions that are 
helpful in programming and debugging. It contains a variety of functions, including ones for working 
with objects, arrays, strings, and more. 
*/

//code snippet
const util = require('util');
const debug = util.debuglog('example');

function someFunction() {
  debug('This is a debug message');
}

someFunction();
