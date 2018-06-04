import * as types from  '../constants/types';

const initialState = {
	todos: undefined,
}

export default function reduce(state = initialState, action = {} ) {
	switch(action.type) {
		case types.ARTICLES_FETCHED:
			return  {
				...state,
				todos: actions.todos
			};
		default:
			return state;
	}
}

