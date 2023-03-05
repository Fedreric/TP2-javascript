let bandera = 0;
const arrayLetrasDni = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
let numLetra = 0;
do {
    let numDni = +prompt('Ingresa tu numero de DNI');

    if (!isNaN(numDni)) {
        numLetra = numDni % 23;
        alert(`La letra del DNI: ${numDni} es ${arrayLetrasDni[numLetra]}`);
        if (!confirm('Desea porbar con uno DNI?, preciona CANCELAR cuando desees finalizar.') == true) {
            bandera++;
        }
    } else {
        alert('Ingrasa un numero! No se admiten letras')
    }

} while (bandera === 0);

