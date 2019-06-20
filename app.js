const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// bring in models and controllers
require('./app_api/models/db');
const apiRouter = require('./app_api/routes/index');

const app = express();

// bring in views
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');



// express middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// let the browser access these directory as is
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_public', 'build')));

// resolve CORS issues; add two headers to all api responses so they can come from different ports
app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); 
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


// send requests 
app.use('/api', apiRouter);
app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'app_public', 'build', 'index.html'));
});



// error handling
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
