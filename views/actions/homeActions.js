import axios from "axios";
import thunk from "redux-thunk";


function prepareFormHeader(){
	let headers = {'Content-Type': 'application/x-www-form-urlencoded'};
	return headers;
}

// Loop HTML Form to post
function loopFormElems(form){
	let d = {};
	for( let i of form.elements) {
		if ( i.name )
			d[i.name] = i.value;
	}
	return d;
}

// Compile HTML Form to post
function prepareFormData(form){

}

function runFormPrepare(form) {
	let d = {};
	/*
	d.headers = prepareFormHeader();

	d.data = {};
	//d.data = loopFormElems(form);

	d.data = prepareFormData(form);
	*/
	//d = prepareFormData(form);
	d = loopFormElems(form);
	return d;
}

export function postHomeAction(ev) {
	// run ajax call here & add data to payload and 
	// dispatch an event so that reducer can populate store
	// With promise,
	// return { type: READ_USERS", payload: axios.get(usersApiUrl) }
	
	return function( dispatch ) {
		console.log(" ev.target ", ev.target);

		var data = runFormPrepare(ev.target);
		//var data = new FormData(ev.target);
		console.log(" form: ", data);

		dispatch({ type: "CREATE_HOME_START", payload: null});

		/*
		*/
		axios
		.post('/api/home', data)
		.then(result => {
			console.log("HOME result succ ", result);
			// Dispatch an event with payload
			dispatch({	
				type: "CREATE_HOME_FULFILLED",
				payload: result.data.objects
			});
		})
		.catch(err => {
			console.log("HOME result ERR ", err);
			dispatch({ 
				type: "CREATE_HOME_REJECTED",
				payload: err
			});
		});
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
