/*
Name : V8 modeule
Description : The v8 module in Node.js provides access to the V8 JavaScript engine, which is the 
JavaScript engine that Node.js uses to execute JavaScript code. The v8 module can be used to get
information about the V8 engine, such as the version of V8 that is being used, the amount of memory 
that V8 is using, and the number of objects that are currently in memory.
*/

//code snippet
const v8 = require('v8');

// Get the version of V8 that is being used
const version = v8.version();

// Get the amount of memory that V8 is using
const heapSize = v8.getHeapSize();

// Get the number of objects that are currently in memory
const objectCount = v8.getObjectCount();

// Print the information that was retrieved
console.log('Version:', version);
console.log('Heap size:', heapSize);
console.log('Object count:', objectCount); 
