import axios from "axios";
import thunk from "redux-thunk";

export function toggleTodo(id) {
	console.log("toggleTodo id: ", id);
	return {
		type: "READ_TODOS_START",
		payload: {
			name: "Will",
			age: 35
		}
	}
}

export function readTodos() {
	// run ajax call here & add data to payload and 
	// dispatch an event so that reducer can populate store
	// With promise,
	// return { type: READ_USERS", payload: axios.get(usersApiUrl) }
	//
	// Start the django server in folder
	// /opt/lampp/htdocs/www/www2/python/venv/venv1_4/pysite_1_4
	// & get data from here
	// http://localhost:8000/api/v1/user/?format=json
	// file:///opt/lampp/htdocs/www/langs/JS/venv/meteorapps/venv/all_apps/quicksell_in/app/users.json
	
	//let ret = { type: "READ_TODOS_START", payload: null};
	//return ret;

	/*
	return {
		type: "READ_TODOS_FULFILLED",
		payload: [
		{
			name: "Will",
			email: "w@w.com",
			age: 35
		},
		{
			name: "Will",
			email: "z@z.com",
			age: 35
		}
		]
	}
	*/


	return function(dispatch) {
		dispatch( {
			type: "READ_TODOS_FULFILLED",
			payload: null
		});
		axios
		.get('/api/users')
		.then(result => {
			// Dispatch an event with payload
			console.log("reTodos call made");
			let ret = {	
				type: "READ_TODOS_FULFILLED",
				payload: result.data.objects
			};
			dispatch(ret);
		})
		.catch(err => {
			console.log("reTodos Error");
			let ret = { 
				type: "READ_TODOS_REJECTED",
				payload: err
			};
			dispatch(ret);
		});

	}
	/*
	*/

}

export function readUsers() {
	return {
		type: "READ_USERS_FULFILLED",
		payload: {
			name: "Will",
			age: 35
		}
	}
}
