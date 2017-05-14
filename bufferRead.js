// // Read from Method
// buf.write(string[, offset][, length][, encoding])

var buf = new Buffer(26);
for (var i = 0; i < 26; i++) {
  buf[i] = i+ 97;
}

console.log(buf.toString('ascii'));
console.log(buf.toString('ascii', 0, 5));
console.log(buf.toString('utf-8', 0, 5));
console.log(buf.toString(undefined, 0, 5));
