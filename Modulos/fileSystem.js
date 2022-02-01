const fs = require('fs');

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    })
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function (err) {
        if (err) {
            console.log("fallo escritura de fila");
        } else {
            console.log("se escribio correctamente");
        }
    });
}

function borrar(ruta,cb) {
    fs.unlink(ruta, function (err) {
        if (err) {
            console.log("fallo borrado de fila");
        } else {
            console.log("se borro correctamente");
        }
    });
}

leer(__dirname + '/archivo.txt', console.log);
escribir(__dirname + '/archivo.txt', 'hola mundo', console.log);
borrar(__dirname + '/archivo.txt', console.log);