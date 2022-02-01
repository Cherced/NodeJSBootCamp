function serompe() {
    return 3 + z;
}

function otrafuncion() {
    serompe();
}

function serompeAsincrona(cb) {
    setTimeout(function () {
        try {
            return 3 + z;
        } catch (error) {
            console.error("error en mi funcion asincrona");
            cb(error);
        }
    }, 10);
}

try {
    // otrafuncion();
    serompeAsincrona(function (error) {
        console.error("tengo error" + error.stack);
    });
} catch (error) {
    console.error("se rompio");
    console.error(error.message);
    console.error(error.stack);
}

console.log("fin");