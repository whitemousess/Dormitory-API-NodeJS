const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    ma_sv: { type: Schema.Types.ObjectId, ref: 'Accounts', required: true },
    title: { type: String },
    content: { type: String },
    status: { type: Number , default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Report", schema);
