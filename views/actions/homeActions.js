import axios from "axios";
import thunk from "redux-thunk";

export function postHome(ev) {
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
	/*
	*/
	return function( dispatch ) {
		console.log( "POSTHOME, dis ", dispatch);
		console.log(" ev ", ev);
		console.log(" ev.target ", ev.target);

		dispatch({ type: "CREATE_HOME_START", payload: null});

		/*
		axios
		.post('/api/users', data)
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
		*/
	}

	//dispatch({ type: "POST_HOME_START", payload: null});
	//return ({ type: "READ_USERS_START", payload: null});

}

export function readUsersPromise() {
	return {
		type: "READ_USERS",
		payload: axios.get('/api/users')
	}
}
