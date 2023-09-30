const express = require("express");
const router = express.Router();
const checkLogin = require("../middleware/checkLogin");
const ReportController = require("../Controllers/ReportController");

router.get("/get-report", checkLogin, ReportController.getReport);
router.get("/get-report-user", checkLogin, ReportController.getReportUser);
router.post("/create-report", checkLogin, ReportController.createReport);

router.put("/:id/success-report", checkLogin, ReportController.successReport);
router.delete("/:id/delete-report", checkLogin, ReportController.deleteReport);

module.exports = router;
