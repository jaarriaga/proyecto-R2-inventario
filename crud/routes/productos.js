// routes/productos.js
const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

// Definir rutas para productos
router.get('/', productosController.getAll);
router.post('/', productosController.create);
router.get('/:id', productosController.getById);
router.put('/:id', productosController.update);
router.delete('/:id', productosController.delete);

module.exports = router;
