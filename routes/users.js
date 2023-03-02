const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send("Obteniendo usuarios... :D");
});

router.get('/search', (req, res) => {
    console.log(req.query);

    res.send("Obteniendo usuario... :D");
});

router.post('/', (req, res) => {
    console.log(req.body);

    res.send("Creando usuario... :v");
});

router.put('/:id', (req, res) => {
    console.log(req.params);
    console.log(req.body);

    res.send("Usuario actualizado... D:");
});

router.patch('/:id', (req, res) => {
    res.send("Domicilio actualizado... :v")
});

router.delete('/:id', (req, res) => {
    console.log(req.params);

    res.send("Usuario eliminado... :c");
});

module.exports = router;