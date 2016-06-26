

var first = new Buffer("abcdefghijklmnopqrstuvwxyz");

console.log(first.toString());

var second = new Buffer(26);

console.log(second.toString());

first.copy(second)

console.log(second.toString());


var dashes = new Buffer(26);

dashes.fill("-")

console.log(dashes.toString());


