const express = require("express");
const router = express.Router();

const StudentController = require("../Controllers/Student.controller");

router.get("/get-students", StudentController.getStudentManager);

module.exports = router;