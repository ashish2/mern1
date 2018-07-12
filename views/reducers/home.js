
let defaultState = {
	ui: {
		submitLoading: false,
		dataSuccess: false
	}

}

const homeReducer = (state = defaultState, action) => {
	switch(action.type) {
		case "SUBMITLOADING_BUTTON_OFF": {
			console.log( "homeRed SUBMIT_BUTTON_CHANGE");
			const data = action.payload;
			//const data = action.payload.data.objects;
			//state = {...state, users: data};
			// FTM, adding same data in `todos` key also, FOR TESTING.
			state = {...state, ui: {...state.ui, submitLoading: !state.ui.submitLoading} };
			break;
		}
		
		case "SUBMITLOADING_BUTTON_OFF": {
			console.log( "homeRed SUBMIT_BUTTON_OFF");
			const data = action.payload;
			//const data = action.payload.data.objects;
			//state = {...state, users: data};
			// FTM, adding same data in `todos` key also, FOR TESTING.
			state = {...state, ui: {...state.ui, submitLoading: action.payload} };
			break;
		}

		case "SUBMITLOADING_BUTTON_OFF": {
			console.log( "homeRed SUBMIT_BUTTON_ON");
			const data = action.payload;
			//const data = action.payload.data.objects;
			//state = {...state, users: data};
			// FTM, adding same data in `todos` key also, FOR TESTING.
			state = {...state, ui: {...state.ui, submitLoading: action.payload} };
			break;
		}

		case "UPDATE_USER_NAME": {
			// Take the todo index to be changed & change it
			// assuming data in `action` var is {payload: {index: Number, name: String}}
			todos = state.todos;
			todo = todos[action.payload.index];
			todo.user.name = action.payload.name;
			state = {...state, todos: todos};
			break;
		}

		case "CREATE_HOME_FULFILLED": {
			state = {...state, data: action.payload, ui: {...state.ui, dataSuccess: true} };
			break;
		}

		case "READ_TODOS_START": {
			break;
		}

		case "READ_TODOS_FULFILLED": {
			const data = action.payload;
			//const data = action.payload.data.objects;
			//state = {...state, users: data};
			// FTM, adding same data in `todos` key also, FOR TESTING.
			state = {...state, todos: data};
			break;
		}

		case "default": {
			break;
		}

	}

	return state;
}

const visibilityFilter = (state, action) => {
	return state;
}


export default homeReducer;
