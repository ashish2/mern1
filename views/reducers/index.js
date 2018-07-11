import {combineReducers} from "redux";

import todoReducer from './todo';
import userReducer from './user';

export default combineReducers({
	todo,
	user
});


