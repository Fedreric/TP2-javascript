
let bandera = 0;

do{
    let fila = +prompt('Ingresa una cantidad de filas');
    let columna = +prompt('Ingresa una cantidad de columnas');
    let multiplo = fila * columna;

    if(!isNaN(fila) && !isNaN(columna)){
        document.write('<table border="1">');
    
    for (let i = 0; i < fila; i++) {
        document.write('<tr>');
    
        for (let j = 0; j < columna; j++) {
            document.write(`<td style="
                            padding: 10px;"
                            >${multiplo}
                            </td>`);
            multiplo--;
        }
    
        document.write('</tr>');
    }
    
    document.write('</table>');
    bandera++;
    }else{
        alert('Debes ingresar NUMEROS');
    }
}while(bandera === 0)


