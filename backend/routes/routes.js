const express = require('express');

const router = express.Router();

// Registrar Data Center
router.route('/datacenter').post(datacenterController.createDatacenterControllerFn);

// Registrar Ususarios
router.route('/auth/register').post(usuariosController.createUsuariosControllerFn);

// Registrar Ventanas de Mantenimiento
router.route('/ventanamantenimiento').post(ventanamantController.createVentanaMantControllerFn);

module.exports = router;