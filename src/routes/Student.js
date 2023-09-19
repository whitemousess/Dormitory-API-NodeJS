const express = require("express");
const router = express.Router();

const checkLogin = require("../middleware/checkLogin");
const StudentController = require("../Controllers/StudentController");

router.get("/get-students",checkLogin, StudentController.getStudentManager);
router.put("/:id/edit",checkLogin, StudentController.editStudent);
router.delete("/:id/delete",checkLogin, StudentController.deleteStudent);

module.exports = router;