const moment = require('moment');

let ahora = moment();
console.log(ahora.format('YYYY-MM-DD HH:mm:ss'));
console.log(ahora.utcOffset(0).format('YYYY-MM-DD HH:mm:ss'));