const AuthRouter = require("./Auth");
const StudentRouter = require("./Student");

function route(app){
    app.use("/api/auth", AuthRouter);
    app.use("/api/student-manager",StudentRouter);
    app.use("/", function(req, res, next) {res.send("NOT FOUND")});
}

module.exports = route;
