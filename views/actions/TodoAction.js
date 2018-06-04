import {getAllTodos} from '../services/todos';
import * as types from './types';

export function fetchAllTodos() {
	return dispatch => {
		const todos = getAllTodos(); // In real life this will be an async call

		dispatch({type: types.TODOS_FETCHED, todos});
	}
}

