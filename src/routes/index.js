const AuthRouter = require("./Auth");
const StudentRouter = require("./Student");
const Report = require("./Report");
const RoomRouter = require("./RoomRouter");

function route(app){
    app.use("/api/auth", AuthRouter);
    app.use("/api/report",Report);
    app.use("/api/student-manager",StudentRouter);
    app.use("/api/rooms", RoomRouter);

    app.use("/", function(req, res, next) {res.send({Error: "NOT FOUND"})});
}

module.exports = route;
