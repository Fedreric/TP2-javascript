let bandera = 0;
do{
    let edad = +prompt('Ingresa tu edad');
    
    if(!isNaN(edad)){
        if(edad >= 18){
            document.write(`Con ${edad} ya puedes conducir.`);
            bandera++;
        }else{
            document.write(`Con ${edad} aun no puedes conducir.`);
            bandera++;
        }
    }else{
        alert('Ingresa un numero!');
    }

}while(bandera === 0);

