//var express = require('express');
//var router = express();//.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/quicksell_in', ['home']);

function getHome(req, res, next) {
	console.log( "inside getHome ", req.body);

	/*
	res.json({
		"status": "success",
		"data": "getHome success"
	});
	*/
	
	let options = {root: config.root};
	res.sendFile('/users.json', options);
}

function postHome(req, res, next) {
	// Insert a document in Mongo
	var body = req.body;

	//console.log("JD req ", req);
	console.log("JD Body ", body, " type body ", typeof body);
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
	

	// TODO: FTM, remove this setTimeout later
	function late() {
		console.log( "timeout ", res);
		// TODO: Fetch `data` from DB
		// SAMPLE Data
		// For Fresher or 1 year experience
		let data = {
			technologies: [
				{name: "react", cost: 4000},
				{name: "python", cost: 4000},
				{name: "ruby", cost: 4000},
				{name: "php", cost: 3000},
				{name: "aws", cost: 3000},
				{name: "c++", cost: 5000},
				{name: "java", cost: 5000},
				{name: "Total", cost: 28000},
		]};

		res.json({
			"status": "success",
			"data": data
		});
	};

	let t = setTimeout(late, 3000);
	//let t = setTimeout(late, 0);
	//clearTimeout(t);
	// TODO-

	/*
	res.json({
		"status": "success",
		"data": req.body
	});
	*/
}


// Functidefined For each method on this /todos routeA
// run `function getTodos` if HTTP Method: get
// run `function postTodo` if HTTP Method: post
//router.route('/home').get(getHome).post(postHome);

//module.exports = router;
module.exports = {get: getHome, post: postHome};



