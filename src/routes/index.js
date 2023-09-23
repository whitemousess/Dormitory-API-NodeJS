const AuthRouter = require("./Auth");
const StudentRouter = require("./Student");
const Report = require("./Report");

function route(app){
    app.use("/api/auth", AuthRouter);
    app.use("/api/report",Report);
    app.use("/api/student-manager",StudentRouter);
    app.use("/", function(req, res, next) {res.send("NOT FOUND")});
}

module.exports = route;
