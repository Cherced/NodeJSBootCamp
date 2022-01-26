function hola(nombre, micallback) {
    setTimeout(function () {
        console.log('hola ' + nombre);
        callback(nombre);
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log('adios ' + nombre);
        otroCallback(nombre);
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(function () {
        console.log('bla bla bla');
        callbackHablar();
    }, 1000);
}

// console.log('iniciando proceso con callbackHell');
// hola('juan', function (nombre) {
//     hablar(function () {
//         hablar(function () {
//             hablar(function () {
//                 adios(nombre, function () {
//                     console.log('proceso terminado de callbackHell');
//                 });
//             });
//         });
//     });
// });

console.log('proceso iniciado con recursividad');

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function () {
            conversacion(nombre, veces - 1, callback);
        });
    } else {
        adios(nombre,callback);
    }
}

hola("camilo", function (nombre) {
    conversacion(nombre, 5, function () {
        console.log('proceso terminado de recursividad');
    });
});

console.log('proceso terminado con recursividad');