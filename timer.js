/*
Name: Timer module
Description : The timers module is a built-in module in Node.js that provides functions for scheduling
and canceling timers. It provides a way to execute a function or piece of code at a specific time in the 
future or after a certain amount of time has passed.
*/

//code snippet 
const { setTimeout } = require('timers');

console.log('Starting timer...');
setTimeout(() => {
  console.log('Timer expired');
}, 5000);