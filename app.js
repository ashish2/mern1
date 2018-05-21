var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/*
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var todoRouter = require('./routes/todo');
let reactpracticeRouter = require('./routes/reactpractice');
*/
var routefiles = require('./routes/routefiles');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/todo', todoRouter);
app.use('/reactpractice', reactpracticeRouter);

app.use('/api', apiRouter);
*/

var routelist = require('./routes/routelist');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

/*
app.get('*', function(req, res, next){
	res.sendFile("./public/index.html");
	//res.render('./public/index.html');
});
*/

// serve static assets normally
app.use(express.static(__dirname + '/public'))

// Handles all routes so you do not get a not found error
app.get('*', function (req, res){
	    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

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
