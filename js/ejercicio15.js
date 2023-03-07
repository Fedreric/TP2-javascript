let bandera = 0;
let contador = 0;
while (bandera === 0) {
    let texto = prompt('Escribe una frase: ');
    texto.toLowerCase();
    if (isNaN(texto)) {
        for (let i = 0; i < texto.length; i++) {
            if (texto.charAt(i) === 'a' || texto.charAt(i) === 'e' || texto.charAt(i) === 'i' || texto.charAt(i) === 'o' || texto.charAt(i) === 'u') {

                contador++;
            }
        }
        document.write(`La palabra ${texto} tiene ${contador} vocales`);
        bandera++;
    } else {
        alert('Por favor solo utiliza letras');
    }
}
