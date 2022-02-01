const fs = require('fs');

let data = "";
let readableStream = fs.createReadStream(__dirname + "/input.txt");

console.log("Started reading");
readableStream.on("data", function(chunk){
    console.log("Received data");
    console.log(chunk.toString());
    console.log(chunk.length);
    console.log(chunk);
    data += chunk;
    console.log("Read " + chunk.length + " bytes");
});

const stream = require('stream');
const util = require('util');



readableStream.setEncoding('UTF8');

// readableStream.on('data', function (chunk) {
//     data += chunk;
// });

// readableStream.on('end', function() {
//     console.log(data);
// });

// process.stdout.write('hola')
// process.stdout.write('que')
// process.stdout.write('tal')

const Transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

let mayus = new Mayus();