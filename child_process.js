/*
Module name: child_processTo run a child process
Description
The child_process module in Node.js allows you to create child processes. A child process is a separate
process that runs alongside your main process. Child processes can be used to run external programs, or 
to run other Node.js modules.
*/

// code snippet
const { spawn } = require('child_process');

// Create a child process that executes the ls command
const child = spawn('ls');

// Listen for the child process's output
child.stdout.on('data', (data) => {
console.log(data);
});

// Wait for the child process to exit
child.on('exit', (code) => {
if (code === 0) {
console.log('The ls command exited successfully.');
} else {
console.log('The ls command exited with an error code of', code);
}
});
