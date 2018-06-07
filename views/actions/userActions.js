import axios from "axios";

export function readUsers() {
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
	axios
	.get('/api/v1/users')
	.then(result => {
		// Dispatch an event with payload
		console.log("/todos post calll made: ", result);
		console.log("/todos store: ", store);
	})
	.catch(err => {
		console.log("/todos get calll errored: ", err);
		console.log("/todos store: ", store);
	});
	/*
	return {
		type: "READ_USERS_FULFILLED",
		payload: {
			name: "Will",
			age: 35
		}
	}
	*/
}
