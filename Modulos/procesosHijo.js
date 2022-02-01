const {
    exec, spawn
} = require('child_process');

// const  exec = require('child_process').exec;

// exec("ls -la", (error, stdout, stderr) => {
//     if (error) {
//         console.error(`exec error: ${error}`);
//         return false;
//     }
//     console.log(`stdout: ${stdout}`);
// })

let proceso = spawn('node', ['Modulos/console.js']);

console.log(proceso.connected);

proceso.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});