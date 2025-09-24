// 1.- Crear una funcion que cuente cuantas veces aparece cada
// vocal en un texto y devuelva el resultado en un objeto

function contarVocales(cadena){
    let con={};
    console.log(cadena);
    for(let letra of cadena){
        if(letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u')
            if(con[letra])
                con[letra]++;
            else
                con[letra]=1;
            
    }
    return con; 
}

let obj=contarVocales("euforia")
console.log(obj)