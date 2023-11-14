const AuthRouter = require("./Auth");
const StudentRouter = require("./Student");
const Report = require("./Report");
const Room = require("./Room");
const BillService = require("./BillService");
const Service = require("./Service");
const Contract = require("./Contract");
const BillElectric = require("./BillElectric");

const checkLogin = require("../middleware/checkLogin");

function route(app) {
  app.use("/api/auth", AuthRouter);
  app.use("/api/report", checkLogin, Report);
  app.use("/api/student-manager", checkLogin, StudentRouter);
  app.use("/api/rooms", checkLogin, Room);
  app.use("/api/bills", checkLogin, BillService);
  app.use("/api/services", checkLogin, Service);
  app.use("/api/contract", checkLogin, Contract);
  app.use("/api/bill-electric", checkLogin, BillElectric);

  app.use("/", function (req, res, next) {
    res.send({ Error: "NOT FOUND" });
  });
}

module.exports = route;
