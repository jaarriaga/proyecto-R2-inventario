// routes/entradas.js
const express = require('express');
const router = express.Router();
const entradasController = require('../controllers/entradasController');

// Rutas para entradas
router.get('/', entradasController.getAll);
router.get('/:id', entradasController.getById);
router.post('/', entradasController.create);
router.put('/:id', entradasController.update);
router.delete('/:id', entradasController.delete);

module.exports = router;
