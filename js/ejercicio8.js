
let bandera = 0;

do {
    let num = +prompt('ingresa un numero del 1 al 50');
    let cadena = '';
    if (num > 0 && num <= 50) {
        for (let i = 1; i <= num; i++) {  
            document.write(cadena + i)
            document.write('<br>');
            cadena = cadena + i;
        }
        bandera++;
    } else {
        alert('Ingresa un numero del 1 al 50 (no se admiten letras ni caracteres especiales)');
    }
} while (bandera === 0);