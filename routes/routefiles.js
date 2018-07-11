
let indexRouter = require('./index');
var usersRouter = require('./users');
var todoRouter = require('./todo');
var homeRouter = require('./home');
let reactpracticeRouter = require('./reactpractice');

console.log("hR ", homeRouter);
//console.log("routFiles config ", config);

module.exports = {
	"ir": indexRouter, 
	"ur": usersRouter, 
	"tr": todoRouter, 
	"hr": homeRouter,
	"rpr": reactpracticeRouter,
};

