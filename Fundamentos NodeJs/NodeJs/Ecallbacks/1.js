function saludar(nombre, callback) {
    setTimeout(function () {
        console.log('hola ' + nombre);
        callback(nombre);
    }, 1000);
}
function despedir(nombre) {
    setTimeout(function () {
        console.log('adios ' + nombre);
    }, 1000);
}
function hablar(callback) {
    setTimeout(function () {
        for (let index = 0; index < 10; index++) {
            console.log('bla bla bla');                
        }        
    }, 10);
    callback();
}

saludar("camilo", function (nombre) {
    hablar(function () {
        despedir(nombre);});
});
