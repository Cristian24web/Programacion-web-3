import {db} from '../config/db.js';
 
export const obtTodo=async () => {
    const [resultado]=await db.query('SELECT * FROM PRODUCTOS');
    return resultado;
}  


// 6.- Crea un endpoint POST /productos que permita registrar un nuevo producto 
//enviando nombre, precio, stock y categoria_id para asociarlo a una categoría existente.
export const insertarProducto = async ({ nombre, precio, stock, categoria_id }) => {
    try {
        const sql = `
        INSERT INTO productos (nombre, precio, stock, categoria_id)
        VALUES (?, ?, ?, ?)
        `;
        const [resultado] = await db.query(sql, [nombre, precio, stock, categoria_id]);
        return resultado;
    } catch (error) {
        console.error("Error en modelo:", error);
        throw error;
    }
};


// 7.- Crea un endpoint GET /productos que devuelva todos los productos y muestre 
// el nombre de la categoría a la que pertenece cada uno.
export const obtenerProductosConCategoria = async () => {
    try {
        const sql = `
        SELECT p.id, p.nombre, p.precio, p.stock, p.fecha_alta, p.fecha_act, c.nombre pertenece_categoria
        FROM productos p, categorias c
        where p.categoria_id=c.id
        ORDER BY p.nombre
        `;
        const [filas] = await db.query(sql);
        return filas;
    } catch (error) {
        console.error("Error en modelo:", error);
        throw error;
    }
};


// 8.- Crea un endpoint GET /productos/:id que devuelva la información de un 
// producto por su ID, incluyendo el nombre de la categoría asociada.
export const obtenerProductoPorId = async (id) => {
    try {
        const sql = `
        SELECT p.id, p.nombre, p.precio, p.stock, p.fecha_alta, p.fecha_act, c.nombre nombre_categoria
        FROM productos p, categorias c
        where p.categoria_id=c.id 
        and p.id = ?
        `;
        const [filas] = await db.query(sql, [id]);

        if (filas.length === 0) return null; // No existe el producto
        return filas[0];
    } catch (error) {
        console.error("Error en modelo:", error);
        throw error;
    }
};


// 9.- Crea un endpoint PUT /productos/:id que permita actualizar todos los datos 
// de un producto, incluyendo la opción de cambiar la categoría a la que 
// pertenece mediante categoria_id.

export const actualizarProducto = async (id, datos) => {
    try {
        const { nombre, precio, stock, categoria_id } = datos;

        const sql = `
        UPDATE productos
        SET nombre = ?, precio = ?, stock = ?, categoria_id = ?, fecha_act = NOW()
        WHERE id = ?
        `;

        const [result] = await db.query(sql, [nombre, precio, stock, categoria_id, id]);
        return result;
    } catch (error) {
        console.error("Error en modelo:", error);
        throw error;
    }
};

// 10.- Crea un endpoint PATCH /productos/:id/stock que permita incrementar o 
// decrementar el stock de un producto enviando al body la cantidad que se 
// desea sumar o restar. 
export const actualizarStockProducto = async (id, cantidad) => {
    try {
        const valor = Number(cantidad); //Conversión segura
        if (isNaN(valor)) throw new Error("La cantidad debe ser un número válido");

        const [resultado] = await db.query(
        `
        UPDATE productos
        SET stock = stock + ?, fecha_act = NOW()
        WHERE id = ?
        `,
        [valor, id]
        );
        return resultado;
    } catch (error) {
        console.error("Error en modelo:", error);
        throw error;
    }
};

/*
export const actualizarStockProducto = async (id, cantidad) => {
    try {
        const cant = Number(cantidad); // asegurar tipo numérico
        const sql = `
        UPDATE productos
        SET stock = stock + ?, fecha_act = NOW()
        WHERE id = ?
        `;
        const [result] = await db.query(sql, [cant, id]);
        return result;
    } catch (error) {
        console.error("Error en modelo:", error);
        throw error;
    }
};

*/