/*
Name : Vm module
Description : The vm module in Node.js provides a virtual machine that can be used to run code
in a sandboxed environment. This can be useful for a variety of tasks, such as running code that
is not trusted, or running code that needs to be isolated from the rest of the system. 
To create a new virtual machine, you can use the vm.create() method. The vm.create() method takes 
a number of options as its arguments, such as the name of the virtual machine, the code to run in 
the virtual machine, and the environment variables that should be available to the virtual machine. 
*/

// code snippet
const vm = require('vm');

// Create a new virtual machine
const vm = vm.create('my-vm');

// Set the code to run in the virtual machine
vm.run('console.log("Hello, world!");');

// Get the global variables that are available to the virtual machine
const globals = vm.getGlobals();

// Print the value of the "console" global variable
console.log(globals.console);