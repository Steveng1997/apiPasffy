const express = require('express');
const routerCierre = express();

const cierreController = require('../controllers/cierre.controller');

module.exports = () => {

    // Get
    routerCierre.get('/getByAllCierre', cierreController.getAllCierre);
    routerCierre.get('/getByIdCierre/:idCierre', cierreController.getIdCierre);
    routerCierre.get('/getEncargada/:encargada', cierreController.getByEncargada);

    // Insert
    routerCierre.post('/registerCierre', cierreController.create);

    // Delete
    routerCierre.delete('/deleteClosing/:id', cierreController.deleteClosing);

    return routerCierre;
}