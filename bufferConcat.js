var buffer1 = new Buffer ('Hello ');
var buffer2 = new Buffer ('World ');
var buffer3 = Buffer.concat([buffer1, buffer2]);

console.log("buffer3 content: "+ buffer3.toString());

var buffer4 = new Buffer ('Friends');
var result = buffer3.compare(buffer4);

if(result < 0) {
  console.log(buffer3 + " comes before " + buffer4);
}else if (result == 0) {
  console.log(buffer3 + " is same as " + buffer4);
} else {
  console.log(buffer3 + " comes after " + buffer4);
}

buffer4.copy(buffer3);
console.log("buffer3 content: " + buffer3.toString());

var buffer5 = buffer3.slice(0,4);
console.log("buffer5 content: " + buffer5.toString());
console.log("buffer length: " + buffer5.length);
