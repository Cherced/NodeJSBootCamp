var tabla = [
    {
        a: "a",
        b: "b",
        c: "c"
    },
    {
        a: 1,
        b: 2,
        c: 3
    }
];

console.log("algo"); // marca por consola que se ejecuto el codigo
console.info("alguiyo"); // se guardan en sitios diferentes
console.error("algo error");// marca diferente el error
console.warn("algo advertencia");// marca diferente el warning
console.table(["hola", "mundo"]);// muestra una tabla con los datos
console.table(tabla); // ordena como tablas los arrays

console.group("grupo");// agrupa los mensajes
console.log("mensaje");
console.groupEnd("grupo");// cierra el grupo

// console.group() & console.groupEnd()
    // Agrupa una cantidad de datos en consola
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves",
    "Viernes", "Sábado", "Domingo"];
    
console.group("diasSemana")
for (let i = 0; i < dias.length; i++) {
console.log(dias[i]);
};
console.groupEnd("diasSemana")

// console.clear()
// Límpia la consola
function limpiarConsola () {
    setTimeout(() => {
        console.clear("Limpiando cada 5 segs");
    }, 10000)
}
limpiarConsola();

// console.count() & console.countReset()
// Cuenta la cantidad de veces que se ejecuta algo
console.count("Veces");
console.count("Veces");
console.countReset("Veces");
console.count("Veces");
console.count("Veces");

// console.time() & console.timeEnd()
// determina el tiempo que demora un proceso en ocurrir
console.time("100-elementos")
for (let i = 0; i < 100; i++){
};
console.timeEnd("100-elementos")
