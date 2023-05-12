/*
Module name: readline-To handle readable streams one line at the time
Description :The readline module in Node.js provides a way to read input from the user one line at a time.
It is useful for tasks such as getting user input for prompts, or for reading the contents of a file line
by line.

The readline module has a number of methods, including:

createInterface(): Creates a new readline interface.

question(): Asks the user a question and returns their response.

readLine(): Reads a line of input from the user.

on(): Registers a listener for a readline event.
*/

// code snippet
const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

rl.question('What is your name? ', (name) => {
console.log('Hello, ' + name + '!');
});

