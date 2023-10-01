const BillModel = require("../models/Bill.model");

module.exports = {
  getAllService(req, res, next) {
    BillModel.find()
      .populate(["masv", "id_service"])
      .then((service) => res.json({ data: service }))
      .catch((err) => res.json({ error: err }));
  },

  getUserService(req, res, next) {
    BillModel.find({masv: req.account._id})
      .populate(["masv", "id_service"])
      .then((service) => res.json({ data: service }))
      .catch((err) => res.json({ error: err }));
  },

  requestService(req, res, next) {
    req.body.masv = req.account._id;
    const bill = new BillModel(req.body);
    bill
      .save()
      .then((result) => {
        res.json({ data: result });
      })
      .catch((err) => {
        res.json({ error: err });
      });
  },
};
