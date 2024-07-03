const express = require('express');
const routerTerapeuta = express();

const terapeutaController = require('../controllers/terapeuta.controller');

module.exports = () => {

    // Consultar
    routerTerapeuta.get('/getId/:id', terapeutaController.getByIdTerapeuta);
    routerTerapeuta.get('/getNombre/:nombre', terapeutaController.getByNombre);
    routerTerapeuta.get('/getByIdAsc', terapeutaController.getAllTerapeuta);
    routerTerapeuta.get('/getByHoraEndDesc', terapeutaController.getAllTerapeutaByOrden);
    routerTerapeuta.get('/orderMinutes', terapeutaController.orderByMinutes);
    routerTerapeuta.get('/getCompany/:company', terapeutaController.getByCompany);
    routerTerapeuta.get('/orderMinutesAndCompany/:company', terapeutaController.orderByMinutesAndCompany);  

    // Insertar
    routerTerapeuta.post('/registerTerapeuta', terapeutaController.create);
    
    // Actualizar
    routerTerapeuta.put('/updateTherapistById/:id', terapeutaController.updateTerapeutas);
    routerTerapeuta.put('/update4Item/:nombre', terapeutaController.updateBy4Item);
    routerTerapeuta.put('/updateByHoraAndSalida/:nombre', terapeutaController.updateHoraAndSalida);
    routerTerapeuta.put('/updateMinutesWithId/:id', terapeutaController.updateMinutesById);    

    // Eliminar
    routerTerapeuta.delete('/deleteTerapeuta/:id', terapeutaController.deleteTerapeutas);

    return routerTerapeuta;
}