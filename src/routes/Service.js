const express = require('express');
const router = express.Router();

const checkLogin = require("../middleware/checkLogin");
const ServiceController = require('../Controllers/Service.controller');

router.get('/get-all-service',checkLogin, ServiceController.getAllService);
router.get('/:id/get-service',checkLogin, ServiceController.getService);
router.post('/create-service',checkLogin, ServiceController.createService);

router.delete('/:id/delete',checkLogin, ServiceController.deleteService);
router.put('/:id/edit', checkLogin, ServiceController.editService);

module.exports = router;