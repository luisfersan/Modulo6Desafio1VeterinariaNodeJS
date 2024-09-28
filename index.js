const { registrar, leer } = require('./operaciones');

// Obtengo los argumentos desde la línea de comandos
const operacion = process.argv[2]; // "registrar" o "leer"
const nombre = process.argv[3];
const edad = process.argv[4];
const tipoAnimal = process.argv[5];
const color = process.argv[6];
const enfermedad = process.argv[7];

// Creo las condiciones para determinar qué función ejecutar
if (operacion === "registrar") {
    registrar(nombre, edad, tipoAnimal, color, enfermedad);
}

if (operacion === "leer") {
    leer();
}