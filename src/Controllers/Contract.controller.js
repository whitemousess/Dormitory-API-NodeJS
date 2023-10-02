const ContractModel = require("../models/Contract.model");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  getContract(req, res, next) {
    ContractModel.find({ liquidation: 0 })
      .populate(["masv", "room_id", "user_id"])
      .then((contract) => res.json({ data: contract }))
      .catch((err) => res.json({ error: err }));
  },

  getLiquidation(req, res, next) {
    ContractModel.find({ liquidation: 1 })
      .populate(["masv", "room_id", "user_id"])
      .then((contract) => res.json({ data: contract }))
      .catch((err) => res.json({ error: err }));
  },

  createContract(req, res, next) {
    req.body.user_id = req.account._id;
    const contract = new ContractModel(req.body);
    contract
      .save()
      .then((result) => res.json({ data: result }))
      .catch((err) => res.json({ error: err }));
  },

  deleteContract(req, res, next) {
    ContractModel.findOneAndDelete({ _id: req.params.id }).then((result) =>
      res.json({ data: result })
    );
  },

  liquidationContract(req, res, next) {
    req.body.liquidation = 1;
    ContractModel.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((contract) => res.json({ data: contract }))
      .catch((error) => res.json({ error: error }));
  },
};
