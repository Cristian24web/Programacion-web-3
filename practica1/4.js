// 4.- Crear una funcion que reciba un arreglo de numeros y devuelva 
// el mayor y el menor, en un objeto.

function Mayor_Menor(arreglo){
    let mayor=0;
    let menor=100000;
    for (let i=0; i<arreglo.length; i++){
        if(arreglo[i]>mayor)
            mayor=arreglo[i]
        if(arreglo[i]<menor)
            menor=arreglo[i]
    }
    return {mayor, menor};
}

let obj=Mayor_Menor([3,1,5,4,2])
console.log(obj)
