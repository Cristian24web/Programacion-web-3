// 8.- Realizar un codigo para ejecutar una funcion callback despues de 2 segundos

function ejecutarDespuesDe2Segundos(callback) {
  setTimeout(() => {
    callback();
  }, 2000); // 2000 milisegundos = 2 segundos
}

// Uso:
ejecutarDespuesDe2Segundos(() => {
  console.log("Han pasado 2 segundos, callback ejecutado");
});
