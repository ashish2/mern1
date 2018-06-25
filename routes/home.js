//var express = require('express');
//var router = express();//.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/quicksell_in', ['home']);

function getHome(req, res, next) {
	console.log( "inside getHome ", req.body);

	res.json({
		"status": "success",
		"data": "getHome success"
	});
}

function postHome(req, res, next) {
	// Insert a document in Mongo
	var body = req.body;

	console.log("JD req ", req);
	console.log("JD Body ", body);
	console.log("JD header ", req.headers);

	/*
	if(!todo.date || !todo.category || !todo.type || !todo.amount ) {
		res.status(400);
		res.json({"error": "Invalid data"});
	} else {
		db.todos.save( todo, function(err, todo) {
			if(err)
				res.send(err);
			res.json(todo);
		});
	}
	*/
	
	return res.json({
		"status": "success",
		"data": "postHome success"
	});
}


// Function defined For each method on this /todos routeA
// run `function getTodos` if HTTP Method: get
// run `function postTodo` if HTTP Method: post
//router.route('/home').get(getHome).post(postHome);

//module.exports = router;
module.exports = {get: getHome, post: postHome};



