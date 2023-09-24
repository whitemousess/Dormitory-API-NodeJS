const RoomModel = require("../models/RoomModel");

module.exports = {
  getManagerRoom(req, res, next) {
    RoomModel.find()
      .populate("user_id")
      .then((rooms) => res.json(rooms));
  },

  getRoomById(req, res, next) {
    RoomModel.findOne({ _id: req.params.id })
      .populate("user_id")
      .then((rooms) => res.json({ data: rooms }))
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
    RoomModel.findOneAndUpdate({ _id: req.params.id },req.body)
      .then((room) => res.json({ data: room }))
      .catch((err) => res.json({ error: err }));
  },

  deleteRoom(req, res, next) {
    RoomModel.findOneAndDelete({ _id: req.params.id})
    .then((room) => res.json({ data: room }))
    .catch((err) => res.json({ error: err }))
  }
};
