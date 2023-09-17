const createError = require('http-errors');
const express = require('express')
const db = require('./config/db')
const route = require("./routes");

const app = express()
const port = 1407

db.connect();

app.use(express.json());

route(app);

//catch 404 and forward to error handler
app.use(function(req, res,next){
    next(createError(404));
});

// error handler

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development'? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(port, () =>
  console.log(`app listening at http://localhost:${port}`)
);
