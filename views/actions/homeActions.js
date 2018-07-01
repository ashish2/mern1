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
	
	// ORI
	d = loopFormElems(form);
	// ORI-
	return d;
}

export function submitButtonChangeAction(ev) {
	console.log("ev.target SUBMIT ", ev.target);

	return {
		type: "SUBMIT_BUTTON_CHANGE",
		payload: null
	}

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
		console.log("JdACtn: ", ev, " val ", ev.target.value, " d ", dispatch);
		let ret = {};
		if( ev.target.value == "" ) {
			// But check, if its already off/disabled then no need to dipatch an event
			ret = {
				type: "SUBMIT_BUTTON_OFF",
				payload: true
			}
		}
		else {
			// But check, if its already off/disabled then no need to dipatch an event
			ret = {
				type: "SUBMIT_BUTTON_OFF",
				payload: false
			}
		}

		return ret;
	}

}
