// controllers/productosController.js
const connection = require('../db/connection');

// Obtener todos los productos
exports.getAll = (req, res) => {
    const query = 'SELECT * FROM Productos';
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

// Obtener un producto por ID
exports.getById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Productos WHERE id_producto = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results[0]);
    });
};

// Crear un nuevo producto
exports.create = (req, res) => {
    const { descripcion, precio_unitario, existencias, categoria } = req.body;
    const query = 'INSERT INTO Productos (descripcion, precio_unitario, existencias, categoria) VALUES (?, ?, ?, ?)';
    connection.query(query, [descripcion, precio_unitario, existencias, categoria], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id_producto: results.insertId });
    });
};

// Actualizar un producto existente
exports.update = (req, res) => {
    const { id } = req.params;
    const { descripcion, precio_unitario, existencias, categoria } = req.body;
    const query = 'UPDATE Productos SET descripcion = ?, precio_unitario = ?, existencias = ?, categoria = ? WHERE id_producto = ?';
    connection.query(query, [descripcion, precio_unitario, existencias, categoria, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Producto actualizado correctamente' });
    });
};

// Eliminar un producto
exports.delete = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Productos WHERE id_producto = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Producto eliminado correctamente' });
    });
};
