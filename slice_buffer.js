

var first = new Buffer("12345677");


console.log("first buffer " + first.toString());


var sec = first.slice(4,7);


console.log("slice buffer " + sec.toString());
