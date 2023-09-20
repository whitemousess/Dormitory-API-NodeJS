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
          var token = jwt.sign({ _id: auth._id }, process.env.ACCESS_TOKEN);
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
      });
  },

  getCurrent(req, res, next) {
    res.json({ data: req.account });
  },

  createUser(req, res, next) {
    const { username, email } = req.body;
    AuthModel.findOne({ $or: [{ username }, { email }] }).then((account) => {
      if (account) {
        res.status(409).json({ message: "username already taken" });
      } else {
        req.body.role = 1;
        req.body.password = "sv" + req.body.username;
        const account = new AuthModel(req.body);
        account
          .save()
          .then((account) => {
            res.status(201).json({ data: account });
          })
          .catch(next);
      }
    });
  },

  deleteUser(req, res, next) {
    if (req.account.role === 0) {
      AuthModel.deleteOne({ _id: req.params.id })
        .then((account) => {
          res.json({ data: account });
        })
        .catch((err) => res.json({ err: err }));
    } else {
      res.json({ error: "Không đủ quyền để xóa!" });
    }
  },
};
