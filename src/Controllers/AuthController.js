const jwt = require("jsonwebtoken");
const AuthModel = require("../models/AccountModel");

module.exports = {
  login(req, res, next) {
    const { username, password } = req.body;
    AuthModel.findOne({ username, password })
    .then((auth) => {
      if (!auth) {
        return res
          .status(404)
          .json({ message: "Invalid username or password" });
      } else {
        var token = jwt.sign({ _id: auth._id }, "dormitory");
        return res.json({
          message: "Login successful",
          data: auth,
          token: token,
          role: auth.role,
        });
      }
    })
    .catch((next) => {
      res.status(404).json({ message: next });
    })
  },

  getCurrent(req, res, next) {},
};
