var createError = require('http-errors');
var express = require('express');
var cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mascotasRouter = require('./routes/mascotas');
var testAPIRouter = require('./routes/testAPI');

var app = express();

app.use(cors());
app.use(express.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mascotas', mascotasRouter);
app.use('/testAPI', testAPIRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
