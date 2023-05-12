/*
Module name: punycode-Deprecated. A character encoding scheme
Description : The punycode module in Node.js provides a simple implementation of the Punycode standard.
Punycode is a character encoding scheme defined by RFC 3492 that is primarily intended for use 
in Internationalized Domain Names (IDN). IDNs are domain names that can contain characters from any 
language, not just the ASCII characters that are allowed in traditional domain names.

The punycode module has two main functions:

encode(): Converts a Unicode string to a Punycode string.

decode(): Converts a Punycode string to a Unicode string.


*/

//code snippet
const punycode = require('punycode');

const encoded = punycode.encode('mañana.com');
console.log(encoded); // xn--maana-pta.com

const decoded = punycode.decode(encoded);
console.log(decoded); // mañana.com
