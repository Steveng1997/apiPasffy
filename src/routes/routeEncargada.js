const express = require('express');
const routerEncargada = express();

const encargadaController = require('../controllers/encargada.controller');

module.exports = () => {

    // Consultar
    routerEncargada.get('/idEncargada/:id', encargadaController.getById);
    routerEncargada.get('/idAdmin/:id', encargadaController.getIdAndRol);
    routerEncargada.get('/usuarioEncargada/:usuario', encargadaController.getByUsuario);
    routerEncargada.get('/nombreEncargada/:nombre', encargadaController.getByNombre);
    routerEncargada.get('/usuarioAndpass', encargadaController.getUsuarioAndPass);
    routerEncargada.get('/usuarioAndpassword', encargadaController.getUsuarioAndPassword);
    routerEncargada.get('/listaEncargada', encargadaController.getEncargadas);

    routerEncargada.post('/test', verifyToken, (req, res) => {
        res.json('Informacion secreta');
    })

    function verifyToken(req, res, next) {
        if (!req.headers.authorization) return res.status(401).json('No autorizado');

        const token = req.headers.authorization.substr(7);
        if (token !== '') {
            const content = jwt.verify(token, 'stil');
            req.data = content;
            next();
        } else {
            res.status(401).json('Token vacio');
        }

    }

    // Insertar
    routerEncargada.post('/registerEncargada', encargadaController.create);

    // Actualizar
    routerEncargada.put('/updateEncargada/:id', encargadaController.updateEncargadas);

    // Eliminar
    routerEncargada.delete('/deleteEncargada/:id', encargadaController.delete);

    return routerEncargada;
}