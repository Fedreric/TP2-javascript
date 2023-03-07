let bandera = 0;
while (bandera === 0){
    let texto = prompt('Escribe una frase: ');
    if (isNaN(texto)) {
        for(let i = 0; i < texto.length; i++){
            document.write(texto.charAt(i) + '-');
            bandera++;
        }        
    } else {
        alert('La frase no puede ser solo numeros');
    }
}
