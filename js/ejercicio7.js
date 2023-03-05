
let bandera = 0;

do{
    let i = +prompt('ingresa un numero del 1 al 50');

    if(i > 0 && i<=50){
        for(i; i > 0 ; i--) {
            for(let j = 0; j < i ; j++) {
                document.write(i)
            }
            document.write('<br>');
        }
        bandera++;
    }else{
        alert('Ingresa un numero del 1 al 50');
    }
} while (bandera === 0);