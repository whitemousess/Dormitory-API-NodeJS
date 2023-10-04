const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema ({
    room_name: {type: String, required: true},
    price: {type: Number, required: true},
    max_number: {type: Number, required: true},
    user_id: {type: Schema.Types.ObjectId, ref: 'Account', required: true},
    status: {type: Number, default: 0},
    area: {type: Number, required: true}
})

module.exports = mongoose.model("Rooms",schema);
