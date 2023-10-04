const RoomModel = require("../models/Room.model");

module.exports = {
  getManagerRoom(req, res, next) {
    // Sử dụng phương thức aggregate để gộp hai bảng dữ liệu
    RoomModel.aggregate([
      {
        $lookup: {
          from: "contracts",
          localField: "_id",
          foreignField: "room_id",
          as: "count_students",
        },
      },
    ])
      .exec()
      .then((result) => {
        return RoomModel.populate(result, { path: "user_id" });
      })
      .then((populatedResult) => {
        res.json({ data: populatedResult });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Lỗi trong quá trình gộp dữ liệu" });
      });
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
