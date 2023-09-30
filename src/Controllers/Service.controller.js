const ServiceModel = require("../models/Service.model");

module.exports = {
  getAllService(req, res, next) {
    ServiceModel.find()
      .then((service) => res.json({ data: service }))
      .catch((err) => console.log(err));
  },

  getService(req, res, next) {
    ServiceModel.findOne({ _id: req.params.id })
      .then((service) => res.json({ data: service }))
      .catch((err) => console.log(err));
  },

  createService(req, res, next) {
    const service = new ServiceModel(req.body);
    service
      .save()
      .then((service) => res.json({ data: service }))
      .catch((err) => console.log(err));
  },

  deleteService(req, res, next) {
    ServiceModel.findOneAndDelete({ _id: req.params.id })
      .then((service) => res.json({ data: service }))
      .catch((err) => console.log(err));
  },

  editService(req, res, next) {
    ServiceModel.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((service) => res.json({ data: service }))
      .catch((err) => console.log(err));
  },
};
