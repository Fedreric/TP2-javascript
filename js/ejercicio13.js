let bandera = 0;
while (bandera === 0){
    let texto = prompt('Escribe una frase: ');
    if (isNaN(texto)) {
        document.write(texto.toUpperCase());
        bandera++;
    } else {
        alert('La frase no puede ser solo numeros');
    }
}
