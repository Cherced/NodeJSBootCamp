console.time('trucos todos');
let suma = 0;
for (let i = 0; i < 1000000; i++) {
    suma += i;   
}
console.time('trucos');


for (let i = 0; i < 10000000000; i++) {
    suma += i;   
}

console.log(suma);
console.timeEnd('trucos');
console.timeEnd('trucos todos');

console.time('asincrono');
console.log('Empieza el proceso async')
asincrona()
    .then(() => {
        console.timeEnd('asincrono');
    });

console.timeEnd('todo');

function asincrona() {
    return new Promise( (resolve) => {
        setTimeout(function () {
            console.log('Termina el proceso asíncrono');
            resolve();
        }, 1000)
    })
}
