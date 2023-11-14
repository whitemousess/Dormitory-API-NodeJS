const BillElectric = require("../models/BillElectric.model");
const ContractModel = require("../models/Contract.model");

module.exports = {
  getElectric(req, res, next) {
    BillElectric.find()
      .populate("room_id")
      .then((electric) => res.json({ data: electric }))
      .catch((error) => console.log(error));
  },

  getElectricRoom(req, res, next) {
    ContractModel.findOne({ masv: req.account._id }).then((contract) => {
      if (contract) {
        BillElectric.findOne({ room_id: contract.room_id._id }).then(
          (electric) => res.json({ data: electric })
        );
      }
    });
  },

  getOneElectric(req, res, next) {
    BillElectric.findOne({ _id: req.params.id })
      .populate("room_id")
      .then((electric) => res.json({ data: electric }))
      .catch((error) => console.log(error));
  },

  deleteBill(req, res, next) {
    BillElectric.findOneAndDelete({ _id: req.params.id })
      .then((electric) => res.json({ data: electric }))
      .catch((error) => console.log(error));
  },

  editBill(req, res, next) {
    BillElectric.findOneAndUpdate({ _id: req.params.id }, req.body)
      .populate("room_id")
      .then((electric) => res.json({ data: electric }))
      .catch((error) => console.log(error));
  },

  createBill(req, res, next) {
    const bill = new BillElectric(req.body);
    bill
      .save()
      .then(() => res.json({ data: bill }))
      .catch((err) => console.log(err));
  },
};
