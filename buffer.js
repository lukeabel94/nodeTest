// // Method 1 - 10 octets
// var buf = new Buffer(10);
//
// // Method 2 - from array
// var buf = new Buffer([10, 20, 30, 40, 50]);
//
// // Method 3 - given string and encoding type
// var buf = new Buffer("Stuff and other stuff", "utf-8");
//
// // Write into method
// buf.write(string[, offset][, length][, encoding]);
//


var buf = new Buffer(256);
len = buf.write("Stuff and things");

console.log("Octects written : " + len);
