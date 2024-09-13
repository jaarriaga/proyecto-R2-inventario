// controllers/entradasController.js
const connection = require('../db/connection');

// Obtener todas las entradas
exports.getAll = (req, res) => {
    const query = 'SELECT * FROM Entradas';
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

// Obtener una entrada por ID
exports.getById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Entradas WHERE id_entrada = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results[0]);
    });
};

// Crear una nueva entrada
exports.create = (req, res) => {
    const { id_producto, cantidad, fecha_entrada } = req.body;
    const query = 'INSERT INTO Entradas (id_producto, cantidad, fecha_entrada) VALUES (?, ?, ?)';
    connection.query(query, [id_producto, cantidad, fecha_entrada], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id_entrada: results.insertId });
    });
};

// Actualizar una entrada
exports.update = (req, res) => {
    const { id } = req.params;
    const { id_producto, cantidad, fecha_entrada } = req.body;
    const query = 'UPDATE Entradas SET id_producto = ?, cantidad = ?, fecha_entrada = ? WHERE id_entrada = ?';
    connection.query(query, [id_producto, cantidad, fecha_entrada, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Entrada actualizada correctamente' });
    });
};

// Eliminar una entrada
exports.delete = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Entradas WHERE id_entrada = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Entrada eliminada correctamente' });
    });
};
