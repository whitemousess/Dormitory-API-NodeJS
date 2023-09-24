const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema ({
    room_name: {type: String, required: true},
    price: {type: String, required: true},
    max_number: {type: String, required: true},
    user_id: {type: Schema.Types.ObjectId, ref: 'Account', required: true},
    status: {type: String, default: 0},
    area: {type: String, required: true}
})

module.exports = mongoose.model("Rooms",schema);
