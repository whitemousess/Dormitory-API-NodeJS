const RoomModel = require("../models/Room.model");
const ContractModel = require("../models/Contract.model");

module.exports = {
  getManagerRoom(req, res, next) {
    const { page, per_page, q } = req.query;

    const conditions = [
      {
        $lookup: {
          from: "contracts",
          localField: "_id",
          foreignField: "room_id",
          as: "count_students",
        },
      },
      {
        $match: {
          ...(q ? { room_name: { $regex: `.*${q}.*`, $options: "i" } } : {}),
        },
      },
    ];

    RoomModel.aggregate(conditions)
      .exec()
      .then((result) => {
        return RoomModel.populate(result, { path: "user_id" });
      })
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
        res.json({ error: "Lỗi trong quá trình gộp dữ liệu" });
      });
  },

  studentInRoom(req, res, next) {
    ContractModel.find({ liquidation: 0, room_id: req.params.room_id })
      .populate(["masv", "room_id", "user_id"])
      .then((contract) => res.json({ data: contract }))
      .catch((err) => res.json({ error: err }));
  },

  getRoomById(req, res, next) {
    RoomModel.findOne({ _id: req.params.id })
      .populate("user_id")
      .then((rooms) => res.json({ data: rooms }));
  },

  getStudentRoom(req, res, next) {},

  createRoom(req, res, next) {
    const room = new RoomModel(req.body);
    room
      .save()
      .then((room) => res.json({ data: room }))
      .catch((err) => res.json({ error: err }));
  },

  editRoom(req, res, next) {
    RoomModel.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((room) => res.json({ data: room }))
      .catch((err) => res.json({ error: err }));
  },

  deleteRoom(req, res, next) {
    RoomModel.findOneAndDelete({ _id: req.params.id })
      .then((room) => res.json({ data: room }))
      .catch((err) => res.json({ error: err }));
  },
};
