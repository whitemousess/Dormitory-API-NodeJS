const jwt = require("jsonwebtoken");
const AuthModel = require("../models/AccountModel");
const cloudinary = require("../config/db/cloudinary");

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
      .catch((err) => {
        res.status(404).json({ message: err });
      });
  },

  getCurrent(req, res, next) {
    res.json({ data: req.account });
  },

  getAllUser(req, res, next) {
    AuthModel.find({ role: 0 })
      .then((data) => {
        res.json({ data: data });
      })
      .catch((error) => res.json({ error: error }));
  },

  getCurrentById(req, res, next) {
    AuthModel.findOne({ _id: req.params.id }).then((account) => {
      res.json({ data: account });
    });
  },

  createUser(req, res, next) {
    if (req.account.role === 0) {
      AuthModel.findOne()
        .sort({ masv: -1 })
        .then((data) => {
          if (!req.body.username) {
            let nextMasv = 19999;
            if (data) nextMasv = data.masv + 1;
            req.body.username = nextMasv;
            req.body.masv = nextMasv;
            req.body.password = "sv" + nextMasv;
            req.body.email = nextMasv + "@gmail.com";
          }

          if (!req.file) {
            req.body.avatarUrl = null;
          } else {
            req.body.avatarUrl = req.file.path;
          }
          req.body.masv = null;
          const account = new AuthModel(req.body);
          account
            .save()
            .then((account) => {
              res.status(201).json({ data: account });
            })
            .catch((error) => res.json({ error: error }));
        });
    } else {
      res.json({ error: "Không đủ quyền để xóa!" });
    }
  },

  deleteUser(req, res, next) {
    if (req.account.role === 0) {
      AuthModel.findOneAndDelete({ _id: req.params.id }).then((data) => {
        if (data) {
          if (data.avatarUrl) {
            const image_id =
              "dormitory" +
              data.avatarUrl
                .split("/upload/")[1]
                .split("/dormitory")[1]
                .split(".")[0];
            cloudinary.uploader.destroy(image_id);
          }
          res.json({ data: data });
        } else {
          res.sendStatus(404);
        }
      });
    } else {
      res.json({ error: "Không đủ quyền để xóa" });
    }
  },

  editUser(req, res, next) {
    AuthModel.findOne({ _id: req.params.id }).then((user) => {
      if (!req.file) {
        req.body.avatarUrl = null;
      } else {
        if (user.avatarUrl) {
          const image_id =
            "dormitory" +
            user.avatarUrl
              .split("/upload/")[1]
              .split("/dormitory")[1]
              .split(".")[0];
          cloudinary.uploader.destroy(image_id);
        }
        req.body.avatarUrl = req.file.path;
      }
      AuthModel.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then((student) => {
          res.json({ data: student });
        })
        .catch((err) => {
          res.json({ error: err });
        });
    });
  },
};
