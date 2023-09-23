const ReportModel = require("../models/ReportModel");

module.exports = {
  createReport(req, res, next) {
    req.body.masv = req.account.masv;
    req.body.fullName = req.account.fullName;
    const report = new ReportModel(req.body);
    report.save().then((report) => res.json(report));
  },

  getReport(req, res, next) {
    ReportModel.find().then((report) => res.json({ data: report }));
  },

  successReport(req, res, next) {
    req.body.status = 1
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
