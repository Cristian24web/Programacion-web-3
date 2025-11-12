import { obtTodo, insertarCategoria, buscarCategoriaConProductos, actualizarCategoria, eliminarCategoria } from "../modelos/categoriaModelos.js";

// 1.- Insertar nueva categoría enviando nombre y descripcion en el body.
export const crearCategoria = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        // Insertar en la base de datos
        const resultado = await insertarCategoria({ nombre, descripcion });

        res.status(201).json({
        mensaje: "Categoría registrada exitosamente",
        id: resultado.insertId,
        });
    } catch (error) {
        console.error("Error en controlador:", error);
        res.status(500).json({ error: "Error al registrar la categoría" });
    }
};

// 2.- Crea un endpoint GET /categorias que devuelva todas las categorías 
// registradas en la base de datos.
export const muestraCategoria=async(req, res)=>{
    try{
        const resultado=await obtTodo();
        res.json(resultado);
    }catch (error){
        res.status(500).json({error:error.message});
    }   
}


// 3.- Crea un endpoint GET /categorias/:id que devuelva la categoría con el 
// ID especificado y además, incluya todos los productos que pertenecen a esa categoría.
export const obtenerCategoriaConProductos = async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await buscarCategoriaConProductos(id);

        if (!categoria) {
        return res.status(404).json({ mensaje: "Categoría no encontrada" });
        }

        res.json(categoria);
    } catch (error) {
        console.error("Error en controlador:", error);
        res.status(500).json({ error: "Error al obtener la categoría y sus productos" });
    }
};

// 4.- Crea un endpoint PUT /categorias/:id que permita actualizar todos los datos 
// de la categoría con el ID especificado. 
export const actualizarCategoriaPorId = async (req, res) => {
    try {
        const id = req.params.id;
        const datos = req.body;

        const resultado = await actualizarCategoria(id, datos);

        if (resultado.affectedRows === 0) {
        return res.status(404).json({ mensaje: "Categoría no encontrada" });
        }

        res.json({ mensaje: "Categoría actualizada correctamente" });
    } catch (error) {
        console.error("Error en controlador:", error);
        res.status(500).json({ error: "Error al actualizar la categoría" });
    }
};

// 5.- Crea un endpoint DELETE /categorias/:id que elimine la categoría indicada y, al 
// mismo tiempo, elimine automáticamente todos los productos que pertenecen a esa categoría.
export const eliminarCategoriaPorId = async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await eliminarCategoria(id);

        if (resultado.affectedRows === 0) {
        return res.status(404).json({ mensaje: "Categoría no encontrada" });
        }

        res.json({ mensaje: "Categoría y sus productos eliminados correctamente" });
    } catch (error) {
        console.error("Error en controlador:", error);
        res.status(500).json({ error: "Error al eliminar la categoría" });
    }
};