const express = require('express');
const routerLiqEncarg = express();

const liquidacionEncargController = require('../controllers/liquidacionEncarg.controller');

module.exports = () => {

    // Consultar
    routerLiqEncarg.get('/getByLiquidacionesEncargada/:company', liquidacionEncargController.getLiquidacionesEncargada);
    routerLiqEncarg.get('/getByIdEncarg/:idEncargada', liquidacionEncargController.getIdEncarg);
    routerLiqEncarg.get('/getEncargada/:encargada', liquidacionEncargController.getByEncargada);
    routerLiqEncarg.get('/getDateCurrent/:createdDate/:company', liquidacionEncargController.getDateCurrentDay);
    routerLiqEncarg.get('/getFechaHoyByManager', liquidacionEncargController.getFechaHoyAndManager);

    // Insertar
    routerLiqEncarg.post('/registerLiqEncarg', liquidacionEncargController.create);

    // Actualizar
    routerLiqEncarg.put('/updateByEncargada/:encargada', liquidacionEncargController.update);
    routerLiqEncarg.put('/updateIdAndImporte/:idEncargada', liquidacionEncargController.updateByIdImporte);
    routerLiqEncarg.put('/updateByEncargByImporteById/:id', liquidacionEncargController.updateEncargadaImporteById);

    // Delete
    routerLiqEncarg.delete('/deleteLiquidationManagers/:id', liquidacionEncargController.deleteLiquidationManager);

    return routerLiqEncarg;
}