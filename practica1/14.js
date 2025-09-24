// 14.- Proporcine un ejemplo para convertir una promesa en un callback
function obtenerNumeroPromesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numero = Math.floor(Math.random() * 10);
      resolve(numero);
    }, 1000);
  });
}


function obtenerNumeroCallback(callback) {
  obtenerNumeroPromesa()
    .then((numero) => callback(null, numero)) // null para error
    .catch((error) => callback(error));
}

// Uso del callback
obtenerNumeroCallback((err, numero) => {
  if (err) {
    console.error("Ocurrió un error:", err);
  } else {
    console.log("Número obtenido:", numero);
  }
});
