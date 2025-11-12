import {db} from '../config/db.js';

// 1.- 
// 1.- Insertar nueva categoría enviando nombre y descripcion en el body.
export const insertarCategoria = async ({ nombre, descripcion }) => {
  const sql = "INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)";
  const [resultado] = await db.query(sql, [nombre, descripcion]);
  return resultado;
};


// 2.- Crea un endpoint GET /categorias que devuelva todas las categorías 
// registradas en la base de datos.
export const obtTodo=async () => {
    const [resultado]=await db.query('SELECT * FROM CATEGORIAS');
    return resultado;
}  


// 3.- Crea un endpoint GET /categorias/:id que devuelva la categoría con el ID 
// especificado y además, incluya todos los productos que pertenecen a esa categoría.
export const buscarCategoriaConProductos = async (id) => {
  // Obtener la categoría
  const [categorias] = await db.query("SELECT * FROM categorias WHERE id = ?", [id]);
  if (categorias.length === 0) {
    return null;
  }
  const categoria = categorias[0];
  // Obtener los productos relacionados
  const [productos] = await db.query("SELECT * FROM productos WHERE categoria_id = ?", [id]);
  // Devolver todo junto
  return {...categoria,productos};
};


// 4.- Crea un endpoint PUT /categorias/:id que permita actualizar todos los datos 
// de la categoría con el ID especificado.
export const actualizarCategoria = async (id, datos) => {
    try {
        const { nombre, descripcion } = datos;
        const sql = `
        UPDATE categorias
        SET nombre = ?, descripcion = ?, fecha_act = NOW()
        WHERE id = ?
        `;

        const [result] = await db.query(sql, [nombre, descripcion, id]);
        return result;
    } catch (error) {
        console.error("Error en modelo:", error);
        throw error;
    }
};



// 5.- Crea un endpoint DELETE /categorias/:id que elimine la categoría indicada y, al 
// mismo tiempo, elimine automáticamente todos los productos que pertenecen a esa categoría.
export const eliminarCategoria = async (id) => {
    try {
        const sql = "DELETE FROM categorias WHERE id = ?";
        const [result] = await db.query(sql, [id]);
        return result;
    } catch (error) {
        console.error("Error en modelo:", error);
        throw error;
    }
};
