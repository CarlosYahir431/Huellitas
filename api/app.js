var createError = require('http-errors');
var express = require('express');
var cors = require("cors");

var usersRouter = require('./routes/users');
var mascotasRouter = require('./routes/mascotas');
const saludRouter = require('./routes/salud');
const comidaRouter = require('./routes/comida');
const actividadRouter = require('./routes/actividades');


var app = express();

app.use(cors());
app.use(express.json());

app.use('/users', usersRouter);
app.use('/mascotas', mascotasRouter);
app.use('/salud', saludRouter);
app.use('/comida', comidaRouter);
app.use('/actividad', actividadRouter);
app.use('/uploads', express.static('uploads'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
