// 2.- Crear una funcion que invierta el orden de las palabras en una frase

function InvetirFrase(cadena){
    let cad="";
    for(let i=cadena.length-1; i>=0; i--){
        cad=cad+cadena[i];
    }  
    return cad; 
}

let cad=InvetirFrase("abcd")
console.log(cad)
