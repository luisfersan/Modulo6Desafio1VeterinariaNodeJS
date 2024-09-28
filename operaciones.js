const fs = require('fs');

// Función para registrar una nueva cita
function registrar(nombre, edad, tipoAnimal, color, enfermedad) {
    // Leer el archivo citas.json
    fs.readFile('./citas.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error al leer el archivo.', err);
            return;
        }

        // Convertir el contenido del archivo en un arreglo
        let citas = JSON.parse(data);

        // Crear una nueva cita
        const nuevaCita = {
            nombre,
            edad,
            tipoAnimal,
            color,
            enfermedad
        };

        // Agregar la nueva cita al arreglo de citas
        citas.push(nuevaCita);

        // Escribir el archivo actualizado
        fs.writeFile('./citas.json', JSON.stringify(citas, null, 2), (err) => {
            if (err) {
                console.log('Error al escribir el archivo.', err);
                return;
            }
            console.log('Cita registrada con éxito.');
        });
    });
}

// Función para leer todas las citas
function leer() {
    fs.readFile('./citas.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error al leer el archivo.', err);
            return;
        }

        const citas = JSON.parse(data);
        console.log('Citas registradas:', citas);
    });
}

module.exports = { registrar, leer };