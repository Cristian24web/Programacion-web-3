// 16.- Proporcione un ejemplo para migrar una funcion con promesas a sync/await

const ids = [1, 2, 3];

function obtenerDatos(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Datos del ID ${id}`);
    }, 1000);
  });
}

function procesarDatos() {
  const promesas = ids.map(id => {
    return obtenerDatos(id).then(resultado => {
      console.log('Resultado:', resultado);
    });
  });

  Promise.all(promesas)
    .then(() => {
      console.log('Todos los datos procesados');
    });
}

procesarDatos();
