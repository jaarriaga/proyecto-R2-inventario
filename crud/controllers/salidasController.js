// controllers/salidasController.js
const connection = require('../db/connection');

// Obtener todas las salidas
exports.getAll = (req, res) => {
    const query = 'SELECT * FROM Salidas';
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

// Obtener una salida por ID
exports.getById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Salidas WHERE id_salida = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results[0]);
    });
};

// Crear una nueva salida
exports.create = (req, res) => {
    const { id_producto, cantidad, fecha_salida } = req.body;
    const query = 'INSERT INTO Salidas (id_producto, cantidad, fecha_salida) VALUES (?, ?, ?)';
    connection.query(query, [id_producto, cantidad, fecha_salida], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id_salida: results.insertId });
    });
};

// Actualizar una salida
exports.update = (req, res) => {
    const { id } = req.params;
    const { id_producto, cantidad, fecha_salida } = req.body;
    const query = 'UPDATE Salidas SET id_producto = ?, cantidad = ?, fecha_salida = ? WHERE id_salida = ?';
    connection.query(query, [id_producto, cantidad, fecha_salida, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Salida actualizada correctamente' });
    });
};

// Eliminar una salida
exports.delete = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Salidas WHERE id_salida = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Salida eliminada correctamente' });
    });
};
