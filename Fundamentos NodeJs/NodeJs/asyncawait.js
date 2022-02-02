async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('hola ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

async function adios(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('adios ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

async function hablar(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('bla bla bla');
            resolve(nombre);
            // reject("hay un error");
        }, 1000);
    });
}

async function main(){
    await hola("milo");
    await hablar();
    await hablar();
    await hablar();
    await adios("miloso");
}

main();

