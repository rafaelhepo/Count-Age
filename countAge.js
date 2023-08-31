"use strict";
alert('Hola bienvenida al programa Count Age, por favor agrega la fecha de nacimiento con el formato DD-MM-AAAA');
alert('Ingresarás todas las fechas y al finalizar te devolverá una lista con el nombre, fecha de nacimiento y edad, en años y meses');
const Names = ['Adán', 'Violeta', 'Kendrick', 'Kevin', 'Odin', 'Carlos', 'Daniel', 'Ian', 'Jose Eduardo', 'Teresa', 'Celine', 'Samanta', 'Hassan', 'Jose Miguel', 'Dylan', 'Armando', 'Mariel', 'Karla', 'Francisco de Jesus', 'Natalia', 'Ximena', 'Abdiel', 'Yarely', 'Milka', 'Alma', 'Francisco Roman', 'Isabel', 'Elian', 'Saul'];
function calcularEdad(fechaNacimiento) {
    const fechaActual = new Date();
    let años = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    let meses = fechaActual.getMonth() - fechaNacimiento.getMonth();
    const diaNacimiento = fechaNacimiento.getDate();
    const diaActual = fechaActual.getDate();
    if (diaActual < diaNacimiento) {
        meses--;
    }
    if (meses < 0) {
        años--;
        meses += 12;
    }
    return { años, meses };
}
for (let name of Names) {
    let fechaValida = false;
    let fecha = '';
    while (!fechaValida) {
        const inputFecha = prompt(`Ingresa fecha de ${name} (DD-MM-YYYY)`);
        if (!inputFecha) {
            alert('Fecha no válida. Asegúrate de seguir el formato DD-MM-YYYY y que sea una fecha válida.');
            continue;
        }
        fecha = inputFecha.trim();
        if (/^\d{2}-\d{2}-\d{4}$/.test(fecha)) {
            const [dia, mes, año] = fecha.split('-').map(Number);
            if (dia >= 1 &&
                dia <= 31 &&
                mes >= 1 &&
                mes <= 12 &&
                año >= 1900 &&
                año <= new Date().getFullYear()) {
                fechaValida = true;
            }
        }
        if (!fechaValida) {
            alert('Fecha no válida. Asegúrate de seguir el formato DD-MM-YYYY y que sea una fecha válida.');
        }
    }
    const [dia, mes, año] = fecha.split('-').map(Number);
    const fechaNacimiento = new Date(año, mes - 1, dia);
    const edad = calcularEdad(fechaNacimiento);
    document.write(`<ul><li>${name}: ${fecha} - Edad: ${edad.años} años y ${edad.meses} meses </li></ul>`);
}
