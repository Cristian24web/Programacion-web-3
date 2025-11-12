import express from 'express';
import { muestraCategoria, crearCategoria, obtenerCategoriaConProductos, actualizarCategoriaPorId, eliminarCategoriaPorId} from '../controladores/categoriaControlador.js';
 
const rutas=express.Router();

// rutas
rutas.post('/categorias/', crearCategoria);
rutas.get('/categorias', muestraCategoria);
rutas.get("/categorias/:id", obtenerCategoriaConProductos);
rutas.put('/categorias/:id', actualizarCategoriaPorId);
rutas.delete('/categorias/:id', eliminarCategoriaPorId); 

export default rutas;

