const express = require("express");
const router = express.Router();
const ReportController = require("../Controllers/Report.controller");

router.get("/get-report", ReportController.getReport);
router.get("/get-report-user", ReportController.getReportUser);
router.post("/create-report", ReportController.createReport);

router.put("/:id/success-report", ReportController.successReport);
router.delete("/:id/delete-report", ReportController.deleteReport);

module.exports = router;
