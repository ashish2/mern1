import axios from "axios";
import thunk from "redux-thunk";

export function readUsers(dispatch) {
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
	
	dispatch({ type: "READ_USERS_START", payload: null});

	axios
	.get('/api/users')
	.then(result => {
		// Dispatch an event with payload
		dispatch({	
			type: "READ_USERS_FULFILLED",
			payload: result.data.objects
		});
	})
	.catch(err => {
		dispatch({ 
			type: "READ_USERS_REJECTED",
			payload: err
		});
	});
}

export function readUsersPromise() {
	return {
		type: "READ_USERS",
		payload: axios.get('/api/users')
	}
}
