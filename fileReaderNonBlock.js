// Non-Blocking file reader
// Program does not wait for file reader to finish
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("End");
