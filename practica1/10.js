// 10.- ¿Cuándo utilizar un callback:

/*
Respuesta.-
Cuándo utilizar un callback:
-Cuando trabajas con APIs o funciones que aún no han sido actualizadas para usar promesas, especialmente en código legado.
-Para operaciones simples y rápidas donde no se requiere encadenamiento complejo o manejo avanzado de errores.
- Cuando deseas que una función ejecute un código después de completar una tarea asincrónica sin necesidad de encadenar múltiples operaciones.
-Sin embargo, ten en cuenta que los callbacks pueden conducir a "callback hell" si se anidan muchas operaciones, dificultando la lectura y el mantenimiento del código.

Cuándo utilizar una PROMESA:
- Solo si la operación asíncrona que estás manejando está diseñada para devolver una promesa o si puedes envolver la operación en una promesa.
- Si la API o función que utilizas ya devuelve una promesa, sí o sí deberías usarla para aprovechar las ventajas que ofrece.
- En algunos casos, también puedes convertir callbacks en promesas mediante new Promise() para integrar ambas técnicas.

*/
//Regla rápida:
//Si es algo corto y simple, usa callback.
//Si es algo asíncrono, encadenado o con errores a manejar, usa promesa (async/await).