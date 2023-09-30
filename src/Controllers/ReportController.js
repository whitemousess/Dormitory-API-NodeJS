const ReportModel = require("../models/ReportModel");

module.exports = {
  createReport(req, res, next) {
    req.body.ma_sv = req.account._id;
    const report = new ReportModel(req.body);
    report.save().then((report) => res.json(report));
  },

  getReport(req, res, next) {
    ReportModel.find().populate("ma_sv").then((report) => res.json({ data: report }));
  },

  getReportUser(req, res, next) {
    ReportModel.find({ma_sv: req.account._id}).then((report) => res.json({ data: report }));
  },

  successReport(req, res, next) { 
    ReportModel.findOneAndUpdate({ _id: req.params.id },req.body).then((report) =>
      res.json({ data: report })
    );
  },

  deleteReport(req, res, next) {
    ReportModel.findOneAndDelete({ _id: req.params.id }).then((report) =>
      res.json({ data: report })
    );
  },
};
