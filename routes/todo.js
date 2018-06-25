var express = require('express');
var router = express();//.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/quicksell_in', ['todos']);

function getTodos(req, res, next) {
	// Get list of all todos
	db.todos.find(function(err, todos) {
		if (err) 
			res.send(err);
		res.json(todos);
	});
}

function postTodo(req, res, next) {
	// Insert a document in Mongo
	var todo = req.body;
	if(!todo.date || !todo.category || !todo.type || !todo.amount ) {
		res.status(400);
		res.json({
			"status": "error",
			"data": "Invalid data"
		});
	} else {
		db.todos.save( todo, function(err, todo) {
			if(err)
				res.send(err);
			res.json(todo);
		});
	}
}

function getTodoId(req, res, next) {
	// Get details of a particular todo
	db.todos.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, todo) {
		if (err)
			res.send(err);
		res.json(todo);
	});
}

function putTodoId(req, res, next) {
	// Modify a record
	var todo = req.body;
	var updatetodo = {};

	if(todo.date)
		updatetodo.date = todo.date;
	if(todo.category)
		updatetodo.category = todo.category;
	if(todo.type)
		updatetodo.type = todo.type;
	if(todo.amount)
		updatetodo.amount = todo.amount;

	if(!updatetodo) {
		res.status(400);
		res.json({"error": "Invalid data"});
	} else {
		db.todos.update({_id: mongojs.ObjectId(req.params.id)}, updatetodo,{}, function(err, todo) {
			if(err)
				res.send(err);
			res.json(todo);
		});
	}

}

function deleteTodoId(req, res, next) {
	// Delete a record
	db.todos.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, todo) {
		if(err)
			res.send(err);
		res.json(todo);
	});

}

// Function defined For each method on this /todos routeA
// run `function getTodos` if HTTP Method: get
// run `function postTodo` if HTTP Method: post
router.route('/todos')
	.get(getTodos)
	.post(postTodo);

router.route('/todo/:id')
	.get(getTodoId)
	.put(putTodoId)
	.delete(deleteTodoId);

module.exports = router;



