// 3.- Crear una funcion que reviba un arreglo de numeros y
// devuelva en un objeto a los pares e impares.

function solucion(arreglo){
    let pares=[];
    let impares=[];
    for (let i=0; i<arreglo.length; i++){
        if(arreglo[i]%2==0)
            pares.push(arreglo[i]);
        else
            impares.push(arreglo[i]);
    }
    return {pares, impares}; // devolvemos un objeto con ambos
}

let obj=solucion([1,2,3,4,5])
console.log(obj)