// function soyAsincrona () {
//     console.log('soy asincrona');
//     setTimeout(function () {
//         console.log('soy asincrona 2');
//     }, 200);
// }
// console.log("iniciando proceso");
// soyAsincrona();
// console.log("proceso terminado");

// //////////7

// function hola(nombre,callback) {
//     setTimeout(function () {
//         console.log('hola ' + nombre);
//         callback();
//     },1000);
// }
// function adios(nombre,callback) {
//     setTimeout(function () {
//         console.log('adios ' + nombre);
//         callback();
//     },1000);
// }
// console.log('iniciando proceso2');
// hola('juan',function () {
//     adios('juan',function () {
//         console.log('proceso terminado de adios');
//     });
//     console.log('proceso terminado de hola');
// }); 

function Saludar(nombre, callback) {
    setTimeout(function () {
        console.log('hola ' + nombre);
        callback(nombre);
    }, 1000);
}

function adios(nombre) {
    setTimeout(function () {
    console.log('adios ' + nombre);
    }, 100);
}

Saludar("camilo", function (nombre) {
    adios(nombre);
    console.log('proceso terminado');
});