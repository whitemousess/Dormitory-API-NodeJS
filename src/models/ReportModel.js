const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    masv: { type: String },
    fullName: { type: String },
    title: { type: String },
    content: { type: String },
    status: { type: Number , default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Report", schema);
