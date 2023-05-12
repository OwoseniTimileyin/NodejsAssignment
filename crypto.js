/*
Module name: cryptoTo handle OpenSSL crypto - graphic functions
Description : The crypto module in Node.js provides cryptographic functions to help you secure your Node.js app.
It includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions.

*/

//code snippet
const crypto = require('crypto');

const password = 'mypassword';

const hash = crypto.createHash('sha256').update(password).digest('hex');

console.log(hash); // '9f86...'
