const express = require('express');
const router = express.Router();

router.get('/users/signin', (req,res) => {
    res.send('Ingresando a la App');
});

router.get('/users/singup', (req,res) =>{
    res.send('Formulario de autenticación');
});


module.exports = router;