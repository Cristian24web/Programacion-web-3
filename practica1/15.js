// 15.- Proporcione un ejemplo para convertir un callback en una promesa

function obtenerNumeroCallback(callback) {
  setTimeout(() => {
    // const numero = Math.floor(Math.random() * 10);
    const numero = 10*10;
    callback(null, numero); // primer parámetro: error
  }, 1000);
}


function obtenerNumeroPromesa() {
  return new Promise((resolve, reject) => {
    obtenerNumeroCallback((error, numero) => {
      if (error) {
        reject(error);
      } else {
        resolve(numero);
      }
    });
  });
}

// Uso con then/catch
obtenerNumeroPromesa()
  .then((numero) => console.log("Número obtenido:", numero))
  .catch((err) => console.error("Ocurrió un error:", err));
