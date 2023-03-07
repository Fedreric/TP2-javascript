let bandera = 0;
do{
    let nota = +prompt('Ingresa tu nota (0 al 10)');
    if(!isNaN(nota)){
        switch(nota) {
            case 0:
            case 1:
            case 2:
                alert('Muy deficiente');
                bandera++;
                break;
            case 3:
            case 4:
                alert('Insuficiente');
                bandera++;
                break;
            case 5:
            case 6:
                alert('Suficiente');
                bandera++;
                break;
            case 7:
                alert('Bien');
                bandera++;
                break;
            case 8:
            case 9:
                alert('Notable');
                bandera++;
                break;
            case 10:
                alert('Sobresaliente');
                bandera++;
                break;
            default:
                alert('Ingresa un numero valido del 0 al 10');
        }
    }else{
        alert('Ingresa un valor numerico!');
    }

}while(bandera === 0);
