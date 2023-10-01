const AuthRouter = require("./Auth");
const StudentRouter = require("./Student");
const Report = require("./Report");
const Room = require("./Room");
const Bill = require("./Bill");
const Service = require("./Service");

const checkLogin = require('../middleware/checkLogin');

function route(app){
    app.use("/api/auth", AuthRouter);
    app.use("/api/report",checkLogin,Report);
    app.use("/api/student-manager",checkLogin,StudentRouter);
    app.use("/api/rooms",checkLogin, Room);
    app.use("/api/bills",checkLogin, Bill);
    app.use("/api/services",checkLogin, Service);

    app.use("/", function(req, res, next) {res.send({Error: "NOT FOUND"})});
}

module.exports = route;
