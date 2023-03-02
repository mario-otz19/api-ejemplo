const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('¡Hola mundo!');
});

router.get('/saludo', (req, res) => {
    res.send('Hola Rubi... Ejemplo de otra ruta en otro archivo... :v');
});

module.exports = router;