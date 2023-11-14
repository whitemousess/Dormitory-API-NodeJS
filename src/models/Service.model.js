const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    status: { type: Number, required: true, default: "0" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Services", schema);
