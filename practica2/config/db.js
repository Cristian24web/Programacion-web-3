import mysql from 'mysql2/promise';
 
export const db=mysql.createPool(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'bd_productos'
    }
);



/*
CREATE TABLE categorias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion VARCHAR(255),
  fecha_alta DATETIME DEFAULT CURRENT_TIMESTAMP,
  fecha_act DATETIME DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  stock INT NOT NULL,
  categoria_id INT NOT NULL,
  fecha_alta DATETIME DEFAULT CURRENT_TIMESTAMP,
  fecha_act DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (categoria_id) REFERENCES categorias(id) ON DELETE CASCADE
);
*/

/*
INSERT INTO categorias (nombre, descripcion) 
VALUES 
  ('Electrónica', 'Dispositivos electrónicos y gadgets'),
  ('Oficina', 'Material y accesorios de oficina');


INSERT INTO productos (nombre, precio, stock, categoria_id) 
VALUES 
  ('Laptop', 1500.50, 10, 1),
  ('Mouse', 25.99, 50, 1),
  ('Cuaderno', 5.00, 100, 2),
  ('Lapicero', 1.50, 200, 2);


*/
