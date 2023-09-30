const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    status: { type: String, required: true, default: "0" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Services", schema);
