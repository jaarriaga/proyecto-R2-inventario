// routes/salidas.js
const express = require('express');
const router = express.Router();
const salidasController = require('../controllers/salidasController');

// Rutas para salidas
router.get('/', salidasController.getAll);
router.get('/:id', salidasController.getById);
router.post('/', salidasController.create);
router.put('/:id', salidasController.update);
router.delete('/:id', salidasController.delete);

module.exports = router;
