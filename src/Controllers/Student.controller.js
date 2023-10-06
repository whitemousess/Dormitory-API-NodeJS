const AuthModel = require("../models/Account.model");

module.exports = {
  getStudentManager(req, res, next) {
    AuthModel.aggregate([
      {
        $lookup: {
          from: "contracts",
          localField: "_id",
          foreignField: "masv",
          as: "count_contract",
        },
      },
      {
        $match: {
          role: 1,
        },
      },
    ])
      .sort({masv: 0})
      .then((populatedResult) => {
        res.json({ data: populatedResult });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Lỗi trong quá trình gộp dữ liệu" });
      });
  },
};
