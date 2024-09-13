// app.js
const express = require('express');
const bodyParser = require('body-parser');
const productosRoutes = require('./routes/productos');
const entradasRoutes = require('./routes/entradas');
const salidasRoutes = require('./routes/salidas');


const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api/productos', productosRoutes);
app.use('/api/entradas', entradasRoutes);
app.use('/api/salidas', salidasRoutes);


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
