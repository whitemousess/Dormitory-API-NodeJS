const express = require('express');
const router = express.Router();

const BillController = require('../Controllers/BillController');

router.get('/', BillController.getAllBill);

module.exports = router;