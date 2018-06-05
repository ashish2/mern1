
const todoReducer = (state, action) => {
	switch(action.type) {
		case "UPDATE_USER_NAME": {
			// Take the todo index to be changed & change it
			// assuming data in `action` var is {payload: {index: Number, name: String}}
			todos = state.todos;
			todo = todos[action.payload.index];
			todo.user.name = action.payload.name;
			state = {...state, todos: todos};
		}
	}
}

const visibilityFilter = (state, action) => {
}


export default todoApp;

