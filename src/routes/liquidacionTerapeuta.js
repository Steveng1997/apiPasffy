const express = require('express');
const routerLiqTerap = express();

const liquidacionTerapController = require('../controllers/liquidacionTerap.controller');

module.exports = () => {

    // Consultar
    routerLiqTerap.get('/getByLiquidacionesTerapeuta', liquidacionTerapController.getLiquidacionesTerapeuta);
    routerLiqTerap.get('/getByIdTerap/:idTerapeuta', liquidacionTerapController.getIdTerap);
    routerLiqTerap.get('/getTerapeutaAndEncargada', liquidacionTerapController.getByTerapeutaAndEncargada);
    routerLiqTerap.get('/getEncargada/:encargada', liquidacionTerapController.getByEncargada);
    routerLiqTerap.get('/getTherapist/:terapeuta', liquidacionTerapController.getByTherapist);
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