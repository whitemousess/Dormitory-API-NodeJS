const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    masv: { type: mongoose.Types.ObjectId, ref: "Account", required: true },
    id_service: { type: mongoose.Types.ObjectId, ref: "Services" },
    phone: {type: String, required: true},
    status: { type: String, required: true, default: "0" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bills-service", schema);
