function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('hola ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('adios ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

function hablar(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('bla bla bla');
            //resolve(nombre);
            reject("hay un error");
        }, 1000);
    });
}

//----
console.log('inciando proceso');
hola('juan')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then(function (nombre) {
       console.log('terminando proceso');
    })
    .catch(error => {
        console.log(error);
        console.log('proceso terminado con error');
    })
    

