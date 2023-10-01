const AuthModel = require("../models/Account.model");

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
};
