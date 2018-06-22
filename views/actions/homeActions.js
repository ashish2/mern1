import axios from "axios";
import thunk from "redux-thunk";

export function postHomeAction(ev) {
	// run ajax call here & add data to payload and 
	// dispatch an event so that reducer can populate store
	// With promise,
	// return { type: READ_USERS", payload: axios.get(usersApiUrl) }
	
	return function( dispatch ) {
		console.log(" ev.target ", ev.target);

		let f = new FormData(ev.target);
		console.log(" form: ", f);

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

export function jdChangeAction(ev) {

	return function(dispatch) {
		console.log("JdACtn: ", ev, " d ", dispatch);
		return {
			type: "JD_UPDATE",
			payload: null
		}
	}

}
