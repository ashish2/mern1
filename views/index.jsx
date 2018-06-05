import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom';
import App from './App';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
// Pass reducers to the store here
import todoReducer from './reducers/todo';
import userReducer from './reducers/user';

initialStateOfStore = {};

const reducers = combineReducers({ userReducer, todoReducer });
const store = createStore(reducers, initialStateOfStore);

/*
const reducer = (state, action) => {
}
*/

ReactDOM.render( 
		(	
		<Provider store={store}>
			<App />
		</Provider>
		), 
	document.getElementById("root"));



