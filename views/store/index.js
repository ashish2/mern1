
import axios from "axios";

import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import {combineReducers} from "redux";

import {applyMiddleware, createStore} from 'redux';
// Pass reducers to the store here
import todoReducer from '../reducers/todo';
import userReducer from '../reducers/user';

var initialStateOfStore = {};

/*
// * This is how you write a middleware
const logger = (store) => (next) => (action) => {
	console.log("action fired", action);
	next(action);
}
*/

//middleware = applyMiddleware(promise(), thunk, logger());
const middleware = applyMiddleware(promise(), thunk, createLogger());

const reducers = combineReducers({ userReducer, todoReducer });
const store = createStore(reducers, initialStateOfStore, middleware);

// with thunk
store.dispatch( (dispatch) => {
	dispatch({type: "FOO"})
	// some async action
	axios.get(getUserUrl).then( (response) => {
		dispatch({type: "RECEIVE_USERS", payload: response.data})
	}).catch((err) => {
		dispatch({type: "RECEIVE_USERS", payload: err})
	});
});

// with promise
store.dispatch( (dispatch) => {
	dispatch({
		type: "READ_USERS",
		payload: axios.get(readUserUrl)
	})
})
