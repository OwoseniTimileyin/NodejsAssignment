/*
Module name: querystring-To handle URL query strings
Description
The querystring module in Node.js provides a way to parse and stringify URL query strings. 
A query string is a part of a URL that follows the question mark (?) character and contains key-value pairs.
The querystring module is a useful tool for working with URL query strings in Node.js. 
It is easy to use and provides a simple way to parse and stringify query strings.

*/
//code snippet
const querystring = require('querystring');

const query = querystring.parse('https://www.example.com/foo?bar=baz&qux=quux&hello=world');

console.log(query); // { bar: 'baz', qux: 'quux', hello: 'world' }
