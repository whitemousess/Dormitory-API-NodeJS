const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    masv: {type: Number, default: null},
    username: { type: String},
    password: { type: String},
    fullName: { type: String },
    gender: { type: Number },
    email: { type: String},
    phone: { type: String },
    address: { type: String },
    dob: { type: String },
    avatarUrl: { type: String},
    role: { type: Number, default: 1},
},{
    timestamps: true
})


module.exports = mongoose.model("Accounts", schema);