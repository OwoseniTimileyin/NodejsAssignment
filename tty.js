/*
Name : Tty module
Description: The tty module is a built-in module in Node.js that provides utilities for working with terminal
devices, such as interactive shells or serial consoles. It provides a way to detect whether the program is 
running in a terminal and to interact with the terminal, such as reading and writing to it. 
*/

//code snippet 
const tty = require('tty');

if (tty.isatty(process.stdout.fd)) {
  console.log('This program is running in a terminal');
} else {
  console.log('This program is not running in a terminal');
}