// Convert buffer to JSON

var buf = new Buffer('Hello World');
var json = buf.toJSON(buf);

console.log(json);
