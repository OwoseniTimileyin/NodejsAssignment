/*
Name : String_decoder
Description :  The string_decoder module is a built-in module in Node.js that provides a way to decode 
Buffer objects into strings. It provides a way to handle multi-byte character encoding in situations 
where a Buffer object may contain only a partial sequence of characters.
*/
const { StringDecoder } = require('string_decoder');

const decoder = new StringDecoder('utf8');

const buffer1 = Buffer.from([0xE2, 0x82, 0xAC]);
console.log(decoder.write(buffer1));

const buffer2 = Buffer.from([0xF0, 0x9F, 0x8D, 0xA3]);
console.log(decoder.write(buffer2));