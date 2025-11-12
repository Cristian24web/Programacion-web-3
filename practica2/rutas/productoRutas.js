import express from 'express';
import { muestraProducto, crearProducto, listarProductos, obtenerProducto, actualizarProductoPorId, modificarStockProducto} from '../controladores/productoControlador.js';
 
const rutas=express.Router();

//rutas
rutas.get('/productos',muestraProducto);
rutas.post('/productos', crearProducto);
rutas.get('/productosCategoria', listarProductos);
rutas.get('/productosPorId/:id', obtenerProducto);
rutas.put('/productosIdCategoriaActualizar/:id', actualizarProductoPorId);
rutas.patch('/productos/:id/stock', modificarStockProducto);

export default rutas;

