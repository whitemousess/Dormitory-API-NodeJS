const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({}, { timestamps: true });

module.exports = mongoose.model("Bills", schema);
