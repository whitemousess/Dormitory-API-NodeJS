const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  room_id: { type: Schema.Types.ObjectId, ref: "Rooms", required: true },
  e_first: { type: Number, required: true },
  e_last: { type: Number, required: true },
  price_per_e: { type: Number, required: true },
  w_first: { type: Number, required: true },
  w_last: { type: Number, required: true },
  price_per_w: { type: Number, required: true },
  date_start: { type: String, required: true },
  date_end: { type: String, required: true },
  payment: { type: String },
  status: { type: Number, default: 0 },
});

module.exports = mongoose.model("Bills-Electric", schema);
