let bandera = 0;
while (bandera === 0) {
    let texto = prompt('Escribe una frase: ');
    texto.toLowerCase();
    if (isNaN(texto)) {
        for (let i = 0; i < texto.length; i++) {
            if (texto.charAt(i) === 'a' || texto.charAt(i) === 'e' || texto.charAt(i) === 'i' || texto.charAt(i) === 'o' || texto.charAt(i) === 'u') {
                document.write(`La primera vocal de la palabra "${texto}" se encuentra en la posición: ${i+1}`);
                bandera++;
                break;
            }
        }       
    } else {
        alert('Por favor solo utiliza letras');
    }
}
