/*
Name: Url
Description: The url module is a built-in module in Node.js that provides utilities for working with URLs.
It can parse URLs into their component parts (such as the protocol, host, path, etc.), as well as construct
URLs from their component parts.
*/

//code snippet 
const url = require('url');

const parsedUrl = url.parse(urlString);

console.log(parsedUrl);
