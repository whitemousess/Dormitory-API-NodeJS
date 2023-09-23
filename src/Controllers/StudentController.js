const AuthModel = require("../models/AccountModel");
const cloudinary = require("../config/db/cloudinary");

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
