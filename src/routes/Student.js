const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");

const checkLogin = require("../middleware/checkLogin");
const StudentController = require("../Controllers/StudentController");

router.get("/get-students",checkLogin, StudentController.getStudentManager);

module.exports = router;