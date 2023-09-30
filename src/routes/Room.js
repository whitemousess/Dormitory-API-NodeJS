const express = require("express");
const router = express.Router();
const checkLogin = require("../middleware/checkLogin");

const RoomController = require("../Controllers/RoomController");

router.get('/get-manager-room',checkLogin,RoomController.getManagerRoom)
router.get('/get-student-room',checkLogin,RoomController.getManagerRoom)
router.get('/:id/get-room',checkLogin,RoomController.getRoomById)

router.post('/create-room',checkLogin,RoomController.createRoom)
router.put('/:id/edit-room',checkLogin,RoomController.editRoom)
router.delete('/:id/delete-room',checkLogin,RoomController.deleteRoom)

module.exports = router