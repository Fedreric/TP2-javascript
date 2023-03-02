let bandera = 0;
let cadena = '';
do{ 
    let frase = prompt('Ingresa una frase');
    cadena = cadena +' '+ frase;
    if (!confirm('Ingresa otra frase, preciona CANCELAR cuando desees finalizar.') == true){ 
        bandera++;
      }
}while(bandera === 0);

document.write(cadena);
