const express = require('express');
const router = express.Router();
const BillServiceController = require('../Controllers/BillElectric.controller');

router.get('/get-electric',BillServiceController.getElectric)
router.get('/get-electric-room/:room_id',BillServiceController.getElectricRoom)
router.get('/:id/get-one-electric',BillServiceController.getOneElectric)

router.post('/create-bill',BillServiceController.createBill)
router.delete('/:id/delete-bill',BillServiceController.deleteBill)
router.put('/:id/edit-bill',BillServiceController.editBill)

module.exports = router