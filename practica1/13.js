// 13.- Proporcione un ejemplo concreto donde el anidamiento de promesas se puede reescribir mejor con async/await haceindo el codigo mas limpio y mantenible


// Funciones que retornan promesas
function obtenerNumeros() {
    return new Promise((resolve) =>
        setTimeout(() => resolve([1, 2, 3, 4, 5, 6]), 1000)
    );
}
function filtrarPares(arr) {
    return new Promise((resolve) =>
        setTimeout(() => resolve(arr.filter((n) => n % 2 === 0)), 1000)
    );
}
function multiplicarPorDos(arr) {
    return new Promise((resolve) =>
        setTimeout(() => resolve(arr.map((n) => n * 2)), 1000)
    );
}
function sumar(arr) {
    return new Promise((resolve) =>
        setTimeout(() => resolve(arr.reduce((a, b) => a + b, 0)), 1000)
    );
}
// PROMESA ENCADENADA (se empieza a enredar)
obtenerNumeros()
    .then((nums) => {
        console.log("Números:", nums);
        return filtrarPares(nums);
    })
    .then((pares) => {
        console.log("Pares:", pares);
        return multiplicarPorDos(pares);
    })
    .then((multiplicados) => {
        console.log("Multiplicados:", multiplicados);
        return sumar(multiplicados);
    })
    .then((resultado) => {
        console.log("Suma final:", resultado); // 24
    })
    .catch((err) => console.error("Error:", err));






    

/*
async function procesarNumeros() {
    try {
        // 1. Simular obtener un arreglo (como si viniera de una API o BD)
        const numeros = await new Promise((resolve) =>
        setTimeout(() => resolve([1, 2, 3, 4, 5, 6]), 1000)
        );
        console.log("Números:", numeros);

        // 2. Filtrar pares
        const pares = numeros.filter((n) => n % 2 === 0);
        console.log("Pares:", pares);

        // 3. Multiplicar por 2
        const multiplicados = pares.map((n) => n * 2);
        console.log("Multiplicados:", multiplicados);

        // 4. Sumar todo
        const suma = multiplicados.reduce((a, b) => a + b, 0);
        console.log("Suma final:", suma); // 24
    } catch (err) {
        console.error("Error:", err);
    }
}

procesarNumeros();
*/
