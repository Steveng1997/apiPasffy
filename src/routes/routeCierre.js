const express = require('express');
const routerCierre = express();

const cierreController = require('../controllers/cierre.controller');

module.exports = () => {

    // Consultar
    routerCierre.get('/getByAllCierre', cierreController.getAllCierre);
    routerCierre.get('/getByIdCierre/:idCierre', cierreController.getIdCierre);
    routerLiqEncarg.get('/getEncargada/:encargada', liquidacionEncargController.getByEncargada);

    // Insertar
    routerCierre.post('/registerCierre', cierreController.create);

    // Delete
    routerLiqTerap.delete('/deleteLiquidationTherapists/:id', liquidacionTerapController.deleteLiquidationTherapist);

    return routerCierre;
}