for (let i = 1; i <= 500; i++) {
    if(i % 4 === 0) {
        document.write(`${i} es multiplo de 4`)
    }else if(i % 9 === 0){ 
        document.write(`${i} es multiplo de 9`)
    }else{
        document.write(i)
    }   
    if(i % 5 === 0){ 
        document.write(`
                        <br>
                        --------------------------`)
    }
    document.write('<br>');
}