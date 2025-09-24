// 9.- Crear una Promesa que devuelva un mensaje de exito despues de 3 segundos.

const miPromesa=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Bienvenido!!!");
    },3000) // despues de 3 segundos nos mostrara el mensaje
    
});


miPromesa.then((respuesta)=>{
    console.log(respuesta); // si es satisfatoria
}).catch(razon =>{
    console.warn(razon);
}).finally(()=>{ // se ejecuta con exito o rechazo
    console.log(`Siga adenlante`);
});

