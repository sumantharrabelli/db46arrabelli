var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const connectionString = "mongodb+srv://Assignment11:User1@cluster0.habke.mongodb.net/learnMongo?retryWrites=true&w=majority";
mongoose = require('mongoose');
mongoose.connect(connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var gucciRouter = require('./routes/gucci');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var gucci = require("./models/gucci");
var resourceRouter = require('./routes/resource');


async function recreateDB() {
  // Delete everything 
  await gucci.deleteMany();

  let instance1 = new gucci({
    Itemname: "GG Marmont super mini bag",
    Quantity: 2,
    price: 1200
  });
  let instance2 = new gucci({
    Itemname: "GG Black backpack",
    Quantity: 2,
    price: 5044
  });
  let instance3 = new gucci({
    Itemname: "GG 100 cotton T-shirt",
    Quantity: 2,
    price: 650
  });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second object saved")
  });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third object saved")
  });
}

let reseed = true;
if (reseed) { recreateDB(); }


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/gucci', gucciRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
