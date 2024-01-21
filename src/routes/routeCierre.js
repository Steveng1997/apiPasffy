const express = require('express');
const routerCierre = express();

const cierreController = require('../controllers/cierre.controller');

module.exports = () => {

    // Consultar
    routerCierre.get('/getByAllCierre', cierreController.getAllCierre);
    routerCierre.get('/getByIdCierre/:idCierre', cierreController.getIdCierre);
    routerCierre.get('/getEncargada/:encargada', cierreController.getByEncargada);

    // Insertar
    routerCierre.post('/registerCierre', cierreController.create);

    // Delete
    routerCierre.delete('/deleteLiquidationTherapists/:id', cierreController.deleteClosing);

    return routerCierre;
}