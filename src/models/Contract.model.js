const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    masv: { type: Schema.Types.ObjectId, ref: "Account", required: true },
    room_id: { type: Schema.Types.ObjectId, ref: "Rooms", required: true },
    user_id: { type: Schema.Types.ObjectId, ref: "Account", required: true },
    date_start: { type: String, required: true },
    date_end: { type: String, required: true },
    method_payment: { type: String },
    status: { type: String, required: true, default: "0" },
    liquidation: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contracts", schema);
