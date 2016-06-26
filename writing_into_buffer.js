


first_buffer = new Buffer(256);

first_buffer.fill(0);

first_buffer.write("this is my first text into buffer");

console.log(first_buffer.toString());

first_buffer.write("more data after index", 20, 20);

console.log(first_buffer.toString());

first_buffer[10] = 123;


console.log(first_buffer.toString());
