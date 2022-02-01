const os = require('os');

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.cpus().length);
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.networkInterfaces());
// console.log(os.constants);
// console.log(os.EOL);
// console.log(os.tmpdir());
// console.log(os.endianness());
// console.log(os.type());
// console.log(os.release());
// console.log(os.uptime());
// console.log(os.loadavg());
// console.log(os.userInfo());
// console.log(os.EOL);
// console.log(os.EOL);

const SIZE = 1024;
function kb(bytes) {return bytes / SIZE }
function mb(bytes) {return kb(bytes) / SIZE }
function gb(bytes) {return mb(bytes) / SIZE }
function tb(bytes) {return gb(bytes) / SIZE }

console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));
console.log(tb(os.freemem()));

console.log(os.totalmem());
console.log(gb(os.totalmem()));