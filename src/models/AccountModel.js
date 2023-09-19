const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String },
    password: { type: String },
    fullName: { type: String },
    sex: { type: Number },
    email: { type: String },
    phone: { type: String },
    avatarUrl: { type: String },
    role: { type: Number, default: 1 },
},{
    timestamps: true
})


module.exports = mongoose.model("Account", schema);