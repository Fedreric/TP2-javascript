let bandera = 0;
let suma = 0;
do {
    let num = +prompt('Ingresa un numero');
    if (!isNaN(num)) {
        suma = suma + num;
        if (!confirm('Ingresa otra numero, preciona CANCELAR cuando desees finalizar.') == true) {
            bandera++;
        }
    } else {
        alert('Ingrasa un numero!')
    }
} while (bandera === 0);
document.write(suma);
