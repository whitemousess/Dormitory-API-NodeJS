const AuthModel = require("../models/AccountModel");

module.exports = {
  getStudentManager(req, res, next) {
    AuthModel.find({ role: 1 })
      .then((student) => {
        res.json({ data: student });
      })
      .catch((err) => {
        res.json({ error: err });
      });
  },

  getOneStudentManager(req, res, next) {
    AuthModel.findOne({ _id: req.params.id })
      .then((student) => {
        res.json({ data: student });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  editStudent(req, res, next) {
    AuthModel.updateOne({ _id: req.params.id }, req.body)
      .then((student) => {
        res.json({ data: student });
      })
      .catch((err) => {
        res.json({ error: err });
      });
  },

  deleteStudent(req, res, next) {
    AuthModel.deleteOne({ _id: req.params.id })
      .then((student) => {
        res.json({ data: student });
      })
      .catch((err) => {
        res.json({ error: err });
      });
  },
};
