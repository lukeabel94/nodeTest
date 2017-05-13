// Blocking file reader
var fs = require("fs");

// read file
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("End");
