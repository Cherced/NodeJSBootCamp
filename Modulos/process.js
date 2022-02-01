// const p = require('process'); // process es un objeto global y no se llama asi

process.on('beforeExit', (code) => {
    console.log(`el proceso va terminar ${code}`);
});
process.on('exit', (code) => {
    console.log('Ale, el proceso acabó');
    setTimeout(() => {
        console.log('Esto no se va a ver nunca');
    }, 0);
});
setTimeout(() => {
    console.log('Esto se va a ver');
}, 0);

process.on('uncaughtException', (err) => {
    console.error('Vaya se nos ha olvidado capturar un error');
    setTimeout(() => {
        console.log('Esto viene desde las excepciones');
    }, 0);
});
process.on('rejectExeption', (err) => {
    console.log(`Error: ${err}`);
});

funcionQueNoExiste();

console.log('Esto si el error no se recoje, no sale');