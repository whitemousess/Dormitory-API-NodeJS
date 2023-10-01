const express = require('express');
const router = express.Router();

const checkLogin = require('../middleware/checkLogin');

const BillController = require('../Controllers/Bill.controller');

router.get('/admin/get-service-request', BillController.getAllService);
router.get('/user/get-service-request', BillController.getUserService);

router.post('/request-bill', BillController.requestService);

module.exports = router;