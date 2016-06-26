

mybuffer = new Buffer(" Some encoded text here \u30c6");

console.log(mybuffer.toString())

console.log(mybuffer.toString('utf8', 5, 9));

var StringDecoder = require('string_decoder').StringDecoder;

var decoder = new StringDecoder('utf8');

console.log(decoder.write(mybuffer));

console.log(mybuffer[13].toString(16));

console.log(mybuffer.readUInt32BE(18).toString(16));

