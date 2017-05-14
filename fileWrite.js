var fs = require('fs');

console.log("Going to write to existing file");
fs.writeFile('input.txt', 'Hello World!', function(err) {
  if (err) {
    return console.error(err);
  }

  console.log("Data written successfully!");
  console.log("Read newly written data");
  fs.readFile('input.txt', function(err, data) {
    if (err) {
      return console.log(err);
    }
    console.log("Asynchronous read: " + data.toString());
  });
});
