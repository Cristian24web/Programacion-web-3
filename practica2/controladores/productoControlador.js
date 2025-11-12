import { obtTodo, insertarProducto, obtenerProductosConCategoria, obtenerProductoPorId, actualizarProducto, actualizarStockProducto}from "../modelos/productoModelos.js";

export const muestraProducto=async(req, res)=>{
    try{
        const resultado=await obtTodo();
        res.json(resultado);
    }catch (error){
        res.status(500).json({error:error.message});
    }
}


// 6.- Crea un endpoint POST /productos que permita registrar un nuevo producto 
//enviando nombre, precio, stock y categoria_id para asociarlo a una categoría existente.
export const crearProducto = async (req, res) => {
    try {
        const { nombre, precio, stock, categoria_id } = req.body;
        // Validacionar
        if (!nombre || precio == null || stock == null || !categoria_id) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }

        const resultado = await insertarProducto({ nombre, precio, stock, categoria_id });

        res.status(201).json({
        mensaje: "Producto registrado correctamente",
        id: resultado.insertId
        });
    } catch (error) {
        console.error("Error en controlador:", error);
        res.status(500).json({ error: "Error al registrar el producto" });
    }
};

// 7.- Crea un endpoint GET /productos que devuelva todos los productos y muestre 
// el nombre de la categoría a la que pertenece cada uno. 
export const listarProductos = async (req, res) => {
    try {
        const productos = await obtenerProductosConCategoria();
        res.json(productos);
    } catch (error) {
        console.error("Error en controlador:", error);
        res.status(500).json({ error: "Error al obtener productos" });
    }
};

// 8.- Crea un endpoint GET /productos/:id que devuelva la información de un 
// producto por su ID, incluyendo el nombre de la categoría asociada.
export const obtenerProducto = async (req, res) => {
    try {
        const {id}=req.params;
        const producto = await obtenerProductoPorId(id);

        if (!producto) {
        return res.status(404).json({ mensaje: "Producto no encontrado" });
        }
        res.json(producto);
    } catch (error) {
        console.error("Error en controlador:", error);
        res.status(500).json({ error: "Error al obtener el producto" });
    }
};


// 9.- Crea un endpoint PUT /productos/:id que permita actualizar todos los datos 
// de un producto, incluyendo la opción de cambiar la categoría a la que 
// pertenece mediante categoria_id.
export const actualizarProductoPorId = async (req, res) => {
    try {
        const id = req.params.id;
        const datos = req.body;
        const resultado = await actualizarProducto(id, datos);

        if (resultado.affectedRows === 0) {
        return res.status(404).json({ mensaje: "Producto no encontrado" });
        }
        res.json({ mensaje: "Producto actualizado correctamente" });
    } catch (error) {
        console.error("Error en controlador:", error);
        res.status(500).json({ error: "Error al actualizar el producto" });
    }
};


// 10.- Crea un endpoint PATCH /productos/:id/stock que permita incrementar o 
// decrementar el stock de un producto enviando al body la cantidad que se 
// desea sumar o restar.
export const modificarStockProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const { cantidad } = req.body;

        if (cantidad === undefined) {
        return res.status(400).json({ error: "Debe enviar la cantidad en el body" });
        }

        const resultado = await actualizarStockProducto(id, cantidad);

        if (resultado.affectedRows === 0) {
        return res.status(404).json({ mensaje: "Producto no encontrado" });
        }

        res.json({ mensaje: "Stock actualizado correctamente" });
    } catch (error) {
        console.error("Error en controlador:", error);
        res.status(500).json({ error: "Error al actualizar stock" });
    }
};

/*
export const modificarStockProducto = async (req, res) => {
  try {
    const id = req.params.id;
    let { cantidad } = req.body;

    // Convertir y validar
    cantidad = Number(cantidad);

    if (isNaN(cantidad)) {
      return res.status(400).json({
        error: "Debe enviar un valor numérico en el campo 'cantidad'. Ejemplo: { \"cantidad\": 5 }"
      });
    }

    const resultado = await actualizarStockProducto(id, cantidad);

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }

    // Consultar nuevo stock
    const [rows] = await db.query("SELECT nombre, stock FROM productos WHERE id = ?", [id]);

    res.json({
      mensaje: cantidad >= 0
        ? `Stock incrementado en ${cantidad} unidades`
        : `Stock decrementado en ${Math.abs(cantidad)} unidades`,
      producto: rows[0]
    });

  } catch (error) {
    console.error("Error en controlador:", error);
    res.status(500).json({ error: "Error al modificar el stock del producto" });
  }
};

*/
/*
export const modificarStockProducto = async (req, res) => {
    try {
        const id = req.params.id;
        const { cantidad } = req.body;
        const resultado = await actualizarStockProducto(id, cantidad);

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }
        res.json({
        mensaje: `Stock actualizado correctamente (${cantidad >= 0 ? "incremento" : "decremento"})`,
        });
    } catch (error) {
        console.error("Error en controlador:", error);
        res.status(500).json({ error: "Error al modificar el stock del producto" });
    }
}; 
*/