// 7.- Almacenar el resto de los elementos de un arreglo sin tomar en
// cuenta los dos primeros elementos de un arreglo, mediante desestructuracion

let arreglo=[5,7,8,2,1]


// Desestructuracion
let [primero, segundo, ...resto] = arreglo;
console.log(resto);    // [8, 2, 1]
// console.log(resto.join(" ")); // devuelve sin corchetes 8 2 1