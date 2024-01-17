const express = require('express');
const routerCierre = express();

const cierreController = require('../controllers/cierre.controller');

module.exports = () => {

    // Consultar
    routerCierre.get('/getByAllCierre', cierreController.getAllCierre);
    routerCierre.get('/getByIdCierre/:idCierre', cierreController.getIdCierre);

    // Insertar
    routerCierre.post('/registerCierre', cierreController.create);

    return routerCierre;
}