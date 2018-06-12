

const initialStateOfStore = [
	{ name: "u1", age: 1},
	{ name: "u2", age: 2},
	{ name: "u3", age: 3},
];

const usersReducer = (state = {}, action) => {
	//console.log("uReducer state ", state, " action", action, " action.type: ", action.type);

	switch( action.type ) {
		case "READ_USERS_FULFILLED": {
			const data = action.payload;
			//const data = action.payload.data.objects;
			state = {...state, users: data};
			break;
		}
		case "READ_USERS_START": {
			break;
		}
		case "READ_USERS_REJECTED": {
			break;
		}
	}

	return state;
}

export default usersReducer;
