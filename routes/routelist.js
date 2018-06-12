var r = require('./routefiles');

//console.log("r", r);

var express = require('express');
var app = express();


//app.use('/', r.indexRouter);
app.use('/', r.ir);
app.use('/users', r.ur );
app.use('/todo', r.tr );
app.use('/reactpractice', r.rpr);
