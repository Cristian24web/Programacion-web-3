
// 11.- Proporcione una ejemplo concreto de encadenamiento de promesas

// Simular obtener un arreglo desde una promesa
function obtenerArreglo() {
    return new Promise((resolve) => {
        setTimeout(() => resolve([1, 2, 3, 4, 5]), 1000);
    });
}

// Encadenamiento de promesas con el arreglo
obtenerArreglo()
    .then((arr) => {
        console.log("Arreglo inicial:", arr);
        return arr.filter((n) => n % 2 === 0); // Filtrar pares
    })
    .then((pares) => {
        console.log("Números pares:", pares);
        return pares.map((n) => n * 10); // Multiplicar por 10
    })
    .then((resultado) => {
        console.log("Resultado final:", resultado); // [20, 40]
    })
    .catch((error) => {
        console.error("Error:", error);
    });
