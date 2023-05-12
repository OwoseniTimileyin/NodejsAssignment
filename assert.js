/*
Module name: Assert

Description
The assert module is a built-in module in Node.js that provides a way to test expressions. 
If the expression evaluates to 0 or false, an assertion failure is thrown and the program is terminated.

*/
// code snippet
const assert = require('assert');
// Test if a value is truthy
assert.ok(true); // This will pass
assert.ok(false); // This will throw an AssertionError