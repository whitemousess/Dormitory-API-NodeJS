const AuthRouter = require("./Auth");
const StudentRouter = require("./Student");
const Report = require("./Report");
const Room = require("./Room");
const Bill = require("./Bill");
const Service = require("./Service");

function route(app){
    app.use("/api/auth", AuthRouter);
    app.use("/api/report",Report);
    app.use("/api/student-manager",StudentRouter);
    app.use("/api/rooms", Room);
    app.use("/api/bills", Bill);
    app.use("/api/services", Service);

    app.use("/", function(req, res, next) {res.send({Error: "NOT FOUND"})});
}

module.exports = route;
