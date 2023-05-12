/*
Module name: path-To handle file paths
Description: The path module in Node.js is a built-in module that provides utilities for working with file paths. 
It is a powerful and versatile module that can be used for a variety of tasks, such as:

Getting information about file paths

Manipulating file paths

Working with relative and absolute paths

Converting between different path formats

The path module is a built-in module in Node.js that provides a way to work with directories and file paths.
It is useful for tasks such as joining paths, getting file extensions, and normalizing paths
*/

// code snippet
const path = require('path');

// Get the extension of a file
const ext = path.extname('myfile.txt');

console.log('The extension of the file is:', ext);

