const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    masv: {type: Number, default: 19999},
    username: { type: String},
    password: { type: String},
    fullName: { type: String },
    sex: { type: Number },
    email: { type: String},
    phone: { type: String },
    address: { type: String },
    dob: { type: String },
    avatarUrl: { type: String},
    role: { type: Number, default: 1},
},{
    timestamps: true
})


module.exports = mongoose.model("Account", schema);