const jwt = require("jsonwebtoken");
const AuthModel = require("../models/Account.model");

module.exports = function checkLogin(req, res, next) {
  try {
    const authorizationHeader = req.headers["authorization"];
    const token = authorizationHeader && authorizationHeader.split(" ")[1];
    if (!token) res.status(403);

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, data) => {
      AuthModel.findOne({ _id: data._id })
        .then((account) => {
          if (account) {
            req.account = account;
            next();
          }
        })
        .catch((next) => {
          res.sendStatus(500);
        });
    });
  } catch (error) {
    res.sendStatus(403).json({ error: error});
  }
};
