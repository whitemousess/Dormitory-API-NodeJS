const BillElectric = require("../models/BillElectric.model");

module.exports = {
  getElectric(req, res, next) {
    BillElectric.find()
      .populate("room_id")
      .then((electric) => res.json({ data: electric }))
      .catch((error) => console.log(error));
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
