
let indexRouter = require('./index');
var usersRouter = require('./users');
var todoRouter = require('./todo');
let reactpracticeRouter = require('./reactpractice');

console.log("uR ", usersRouter);

module.exports = {"ir": indexRouter, "ur": usersRouter, "tr": todoRouter, "rpr": reactpracticeRouter};

