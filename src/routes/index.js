const AuthRouter = require("./Auth");

function route(app){
    app.use("/api/auth", AuthRouter);
    app.use("/", function(req, res, next) {res.send("NOT FOUND")});
}

module.exports = route;
