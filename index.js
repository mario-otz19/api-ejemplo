require('dotenv').config();
const express = require('express');
const app = express();
const port = +process.env.API_PORT;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/saludo', (req, res) => {
    res.send('Hola Rubi... Ejemplo de otra ruta... :v');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto: ${ port }`);
});
