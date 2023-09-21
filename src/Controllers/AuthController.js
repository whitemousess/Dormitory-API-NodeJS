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
    AuthModel.findOne()
    .sort({ masv: -1 })
    .then((data) => {
        let nextMasv = 19999;
        if (data) nextMasv = data.masv + 1
        req.body.masv = nextMasv;
        req.body.role = 1;
        req.body.password = "sv" + nextMasv;
        req.body.email = nextMasv + "@gmail.com"
        req.body.username = nextMasv
        const account = new AuthModel(req.body);
        account
          .save()
          .then((account) => {
            res.status(201).json({ data: account });
          })
          .catch((error) => res.json({ error: error}));
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
