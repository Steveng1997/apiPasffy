const express = require('express');
const routerLiqTerap = express();

const liquidacionTerapController = require('../controllers/liquidacionTerap.controller');

module.exports = () => {

    // Consultar
    routerLiqTerap.get('/getByLiquidacionesTerapeuta/:company', liquidacionTerapController.getLiquidacionesTerapeuta);
    routerLiqTerap.get('/getByIdTerap/:idTerapeuta', liquidacionTerapController.getIdTerap);
    routerLiqTerap.get('/getTerapeutaAndEncargada', liquidacionTerapController.getByTerapeutaAndEncargada);
    routerLiqTerap.get('/getEncargada/:encargada/:company', liquidacionTerapController.getByEncargada);
    routerLiqTerap.get('/getTherapist/:terapeuta/:company', liquidacionTerapController.getByTherapist);
    routerLiqTerap.get('/getDateCurrent/:createdDate/:company', liquidacionTerapController.getDateCurrentDay);
    routerLiqTerap.get('/getFechaHoyByManager', liquidacionTerapController.getFechaHoyAndManager);
    routerLiqTerap.get('/getManagerFechaHoraInicioFechaHoraFinLiquidationTherapist', liquidacionTerapController.getByManagerFechaHoraInicioFechaHoraFinLiquidationTherapist);
    routerLiqTerap.get('/getDistinctByManagerFechaHoraInicioFechaHoraFinLiquidationTherapist', liquidacionTerapController.getWithDistinctByManagerFechaHoraInicioFechaHoraFinLiquidationTherapist);

    // Insertar
    routerLiqTerap.post('/registerLiqTerap', liquidacionTerapController.create);

    // Actualizar
    routerLiqTerap.put('/updateByTerapeuta/:terapeuta', liquidacionTerapController.update);
    routerLiqTerap.put('/updateIdAndImporte/:idTerapeuta', liquidacionTerapController.updateByIdImporte);
    routerLiqTerap.put('/updateByTerapByImporteById/:id', liquidacionTerapController.updateTerapeutaImporteById);

    // Delete
    routerLiqTerap.delete('/deleteLiquidationTherapists/:id', liquidacionTerapController.deleteLiquidationTherapist);

    return routerLiqTerap;
}