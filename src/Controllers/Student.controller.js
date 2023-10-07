const AuthModel = require("../models/Account.model");

module.exports = {
  getStudentManager(req, res, next) {
    const { page, per_page, q } = req.query;

    const conditions = [
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
          ...(q ? { username: { $regex: `.*${q}.*` } } : {}),
        },
      },
      {
        $sort: { masv: 1 }, // Sắp xếp giảm dần theo masv
      },
    ];

    AuthModel.aggregate(conditions)
      .then((data) => {
        const currentPage = parseInt(page) || 1;
        const dataPerPage = parseInt(per_page) || data.length;
        const startIndex = (currentPage - 1) * dataPerPage;
        const endIndex = startIndex + dataPerPage;
        const totalItems = data.length;

        const totalPages = Math.ceil(totalItems / dataPerPage);
        const items = data.slice(startIndex, endIndex);
        res.json({
          data: items,
          currentPage,
          totalPages,
        });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Lỗi trong quá trình gộp dữ liệu" });
      });
  },
};
