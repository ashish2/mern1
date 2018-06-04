import * as types from  '../constants/types';

const initialState = {
	todos: undefined,
}

//export default function reduce(state = initialState, action = {} ) {
export default function reduce(state = [], action = {} ) {
	switch(action.type) {
		case types.ARTICLES_FETCHED:
			return  {
				...state,
				todos: action.todos
			};
		default:
			return state;
	}
}

