// 5.- Crear una funcion que determine si una cadena es palindromo 
//(se lee igual ,derecha a izquierda).
function palindromo(cadena){
    nuevo_palabra="";
    for(let i=0; i<cadena.length; i++){
        nuevo_palabra=cadena[i]+nuevo_palabra;
    }
    if(cadena===nuevo_palabra)
        return true;
    else
        return false;
}

let band=palindromo("oruro") // reconocer return true
console.log(band)