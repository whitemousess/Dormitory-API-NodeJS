const express = require('express');
const router = express.Router();

const BillController = require('../Controllers/BillService.controller');

router.get('/admin/get-service-request', BillController.getAllService);
router.get('/user/get-service-request', BillController.getUserService);

router.post('/request-bill', BillController.requestService);
router.delete('/:id/delete-bill', BillController.deleteRequestService);

module.exports = router;