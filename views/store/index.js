
import axios from "axios";

import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import {combineReducers} from "redux";

import {applyMiddleware, createStore} from 'redux';
// Pass reducers to the store here
import todosReducer from '../reducers/todo';
import usersReducer from '../reducers/user';


/*
// * This is how you write a middleware
const logger = (store) => (next) => (action) => {
	console.log("action fired", action);
	next(action);
}
*/

const initialStateOfStore = {};
const middleware = applyMiddleware(promise(), thunk, createLogger());
const reducers = combineReducers({ 
	users: usersReducer,
	todos: todosReducer
});
const store = createStore(reducers, initialStateOfStore, middleware);

//console.log( "store.subscribe ", store.subscribe);

/*
// with thunk, Working Fine
store.dispatch( (dispatch) => {
	dispatch({type: "FOO"})
	// some async action
	let readUsersUrl = "http://google.co.in";
	axios.get(readUsersUrl).then( (response) => {
		dispatch({type: "READ_USERS", payload: response.data})
	}).catch((err) => {
		dispatch({type: "READ_USERS", payload: err})
	});
});

// with promise, Working Fine
store.dispatch( (dispatch) => {
	let readUsersUrl = "http://google.co.in/users";
	dispatch({
		type: "READ_USERS",
		payload: axios.get(readUsersUrl)
	})
})
*/

export default store;

