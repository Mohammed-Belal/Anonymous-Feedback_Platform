require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var  connectDb = require('./db/db');
var cors = require('cors');


// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var feedbackRouter = require('./routes/feedback');
var roomRouter = require('./routes/room');
var dashboardRouter = require('./routes/dashboardRoutes');

var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/feedback', feedbackRouter);
app.use('/room', roomRouter);
app.use('/api', dashboardRouter);
connectDb();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

const port = process.env.PORT ;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  app.use((err, req, res, next) => {
    res.status(500);
    res.render("error", { error: err });
  });
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
