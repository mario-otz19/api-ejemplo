require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/db');
const routerTest = require('./routes/test');

const { API_PORT, DB_ENGINE } = process.env;

// Conexión a base de datos
db.sync().then(() => {
    console.log('BD Conectada... :D');
    console.log(`SGBD: ${ DB_ENGINE.toUpperCase() }`);
})
.catch((error) => {
    console.log(`Se ha encontrado el siguiente error: ${ error }`)
});

// Parseo de JSON
app.use(express.json());

// Rutas o endpoints de la REST API que están expuestos
app.use('/', routerTest);
app.use('/user', require('./routes/users'));

// Configuración del puerto de la REST API
app.listen(+API_PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${ API_PORT }`);
});
