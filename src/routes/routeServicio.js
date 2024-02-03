const express = require('express');
const routerServicio = express();

const servicioController = require('../controllers/servicio.controller');

module.exports = () => {

    // Get
    routerServicio.get('/getByCierreTrue', servicioController.getByCurrentDesc);
    routerServicio.get('/getTerapeutaAndEncargada/:terapeuta/:encargada', servicioController.getByTerapeutaAndEncargada);
    routerServicio.get('/getByTerapeutaLiquidatedZero/:terapeuta', servicioController.getByTerapeutaAndLiquidatedZero);
    routerServicio.get('/getByManagerLiquidatedZero/:encargada', servicioController.getByManagerAndLiquidatedZero);
    routerServicio.get('/getEncargada/:encargada', servicioController.getByEncargada);
    routerServicio.get('/getEncargadaAndCierre/:encargada', servicioController.getByCierre);
    routerServicio.get('/getServicios', servicioController.getServicio);
    routerServicio.get('/getManagerOrderCurrentDate/:encargada', servicioController.getManagerOrderCurrenDate);
    routerServicio.get('/getByLiquidacionTerapeutaFalse', servicioController.getByLiquidTerapFalse);
    routerServicio.get('/getByLiquidacionManagerFalse', servicioController.getByLiquidaManagerFalse);    
    routerServicio.get('/getIdTerapeuta/:idTerapeuta', servicioController.getByIdTerap);
    routerServicio.get('/getIdCierre/:idCierre', servicioController.getByIdCierre);
    routerServicio.get('/getIdCierreDistinct/:idCierre', servicioController.getByIdCierreDistinct);    
    routerServicio.get('/getIdEncargada/:idEncargada', servicioController.getByIdEncarg);
    routerServicio.get('/getCierreFalse', servicioController.geyByCierreFalse);
    routerServicio.get('/getId/:id', servicioController.getById);
    routerServicio.get('/getIdEditar/:id', servicioController.getByEditar);
    routerServicio.get('/getByTerapeutaAsc/:terapeuta', servicioController.getTerapeutaByAsc);
    routerServicio.get('/getByTerapeutaDesc/:terapeuta', servicioController.getTerapeutaByDesc);
    routerServicio.get('/getByTerapeuta/:terapeuta', servicioController.getTerapeuta);
    routerServicio.get('/getByEncargada/:encargada', servicioController.getEncargada);
    routerServicio.get('/getTerapeuAndEncar', servicioController.getTerapeutaEncargada);
    routerServicio.get('/getEncargadaLiquidacionFalse/:encargada', servicioController.getEncargadaAndLiquidacion);
    routerServicio.get('/getEncargadaLiquidadoTerpFalse/:encargada', servicioController.getEncargadaNoLiquidadaTerap);
    routerServicio.get('/getEncargNoLiquid/:encargada', servicioController.getEncargadaNoLiquidada);
    routerServicio.get('/getEncargNoLiquidByFechaDesc/:encargada', servicioController.getEncargadaNoLiquidadaByFechaDesc);
    routerServicio.get('/getTerapgNoLiquidByFechaDesc/:encargada', servicioController.getTerapNoLiquidadaByFechaDesc);
    routerServicio.get('/getNoEncargNoLiquidByFechaAsc/:encargada', servicioController.getEncargadaNoLiquidadaByFechaAsc);
    routerServicio.get('/getNoTerapNoLiquidByFechaAsc/:encargada', servicioController.getTerapNoLiquidadaByFechaAsc);
    routerServicio.get('/getByEncargadaNoCierre/:encargada', servicioController.getEncargadaNoCierre);
    routerServicio.get('/getByTerapFechaAsc', servicioController.getTerapeutaFechaAsc);
    routerServicio.get('/getByTerapFechaAscByLiquidadoTrue', servicioController.getTerapeutaFechaAscByLiqTrue);
    routerServicio.get('/getEncargFechaAscByLiqTrue/:encargada', servicioController.getEncargadaFechaAscByLiqTrue);
    routerServicio.get('/getEncargFechaAscByLiqFalse/:encargada', servicioController.getEncargFechaAsc);
    routerServicio.get('/getTerapeutaAndEncargadaFechaDesc', servicioController.getTerapeutaFechaDesc);
    routerServicio.get('/getTerapeutaAndEncargadaFechaDescLiqTrue', servicioController.getTerapeutaFechaDescByLiqTrue);
    routerServicio.get('/getByEncargadaByLiqTrue/:encargada', servicioController.getEncargadaFechaDescByLiqTrue);
    routerServicio.get('/getByTerapeutaWithCurrentDate/:terapeuta', servicioController.getTerapeutaWithCurrentDate);
    routerServicio.get('/getByEncargFechaDesc/:encargada', servicioController.getEncargFechaDesc);
    routerServicio.get('/getByEncargadaFechaAsc/:encargada', servicioController.getEncargadaFechaAsc);
    routerServicio.get('/getByEncargadaFechaDesc/:encargada', servicioController.getEncargadaFechaDesc);
    routerServicio.get('/getByFechaHoy/:fechaHoyInicio', servicioController.getFechaHoy);
    routerServicio.get('/getByIdDesc/:idUnico', servicioController.getIdDesc);
    routerServicio.get('/getByServicioByEncargadaAndIdUnico/:encargada', servicioController.getServicioByEncargadaAndIdUnico);
    routerServicio.get('/getByEncargadaFechaAscByCierreTrue/:encargada', servicioController.getEncargadaFechaAscByCierreTrue);
    routerServicio.get('/getByEncargadaFechaDescByCierreFalse/:encargada', servicioController.getEncargadaFechaDescByCierreFalse);
    routerServicio.get('/getTerapeutaEncargadaFechaHoraInicioFechaHoraFin', servicioController.getByTerapeutaEncargadaFechaHoraInicioFechaHoraFin);
    routerServicio.get('/getEncargadaFechaHoraInicioFechaHoraFin', servicioController.getByEncargadaFechaHoraInicioFechaHoraFin);
    routerServicio.get('/getFechaHoyByManager', servicioController.getFechaHoyAndManager);
    routerServicio.get('/getPaymenForm/:formaPago', servicioController.getPaymentForm);
    routerServicio.get('/getTherapistAndDate/:terapeuta/:fechaHoyInicio', servicioController.getTherapistAndDates);
    routerServicio.get('/getManagerAndDate/:encargada/:fechaHoyInicio', servicioController.getManagerAndDates);
    routerServicio.get('/getTherapistConsultManagerAndDate/:encargada/:fechaHoyInicio', servicioController.getTherapistConsultingManagerAndDate);
    routerServicio.get('/getTherapistAndManagerAndDate/:terapeuta/:encargada/:fechaHoyInicio', servicioController.getTherapistAndManagerAndDates);
    routerServicio.get('/getEncargadaClosing/:encargada', servicioController.getByEncargadaClosing);
    routerServicio.get('/getClosingByFalse', servicioController.getByClosingFalse);
    routerServicio.get('/getDistinctManagerFechaHoraInicioFechaHoraFinClosing', servicioController.getWithDistinctByManagerFechaHoraInicioFechaHoraFinClosing);  
    routerServicio.get('/getManagerFechaHoraInicioFechaHoraFinClosing', servicioController.getByManagerFechaHoraInicioFechaHoraFinClosing);  
    
    // Insert
    routerServicio.post('/registerServicio', servicioController.create);

    // Update
    routerServicio.put('/updateByServicio/:id', servicioController.updateServicio);
    routerServicio.put('/updateAllTheServicio/:id', servicioController.updateAllServicio);
    routerServicio.put('/updateByNumberPiso1/:idUnico', servicioController.updateNumberPiso1);
    routerServicio.put('/updateByValuePisos/:id/:idUnico', servicioController.updateValuePisos);
    routerServicio.put('/updateByWithValueNumberPiso1/:id/:idUnico', servicioController.updateWithValueNumberPiso1);
    routerServicio.put('/updateByNumberPiso2/:idUnico', servicioController.updateNumberPiso2);
    routerServicio.put('/updateByWithValueNumberPiso2/:id/:idUnico', servicioController.updateWithValueNumberPiso2);
    routerServicio.put('/updateByLiquidacionTerap/:id', servicioController.updateLiquidacionTerap);
    routerServicio.put('/updateByLiquidacionEncarg/:id', servicioController.updateLiquidacionEncarg);
    routerServicio.put('/updateByCierre/:id', servicioController.updateCierre);
    routerServicio.put('/updatesTherapistSettlementTherapistIdByTherapistId/:idTerapeuta', servicioController.updateTherapistSettlementTherapistIdByTherapistId);
    routerServicio.put('/updatesManagerSettlementManagerIdByManagerId/:idEncargada', servicioController.updateManagerSettlementManagerIdByManagerId);
    routerServicio.put('/updateScreenById/:id', servicioController.updateScreenByIds);

    // Delete
    routerServicio.delete('/EliminarServicio/:id', servicioController.deleteServicio);

    return routerServicio;
}