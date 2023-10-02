const express = require('express');
const router = express.Router();

const ContractController = require('../Controllers/Contract.controller')

router.get('/get-contracts',ContractController.getContract);
router.get('/get-liquidation',ContractController.getLiquidation);

router.delete('/:id/delete-contracts',ContractController.deleteContract);
router.post('/create-contracts',ContractController.createContract);
router.get('/:id/liquidation-contracts',ContractController.liquidationContract);

module.exports = router;