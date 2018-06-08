

const initialStateOfStore = [
	{ name: "u1", age: 1},
	{ name: "u2", age: 2},
	{ name: "u3", age: 3},
];

const usersReducer = (state = {}, action) => {
	console.log("uReducer state ", state, " action", action, " action.type: ", action.type);

	switch( action.type ) {
		case "READ_USERS_FULFILLED": {
			console.log("rUFul");
			
			const data = action.payload;
			//const data = action.payload.data.objects;
			//state = {...state, users: data};
			state = {...state, users: data};
			console.log("rUFul state ", state);
			break;
		}
		case "READ_USERS_START": {
			console.log("RUStart");
			break;
		}
		case "READ_USERS_REJECTED": {
			console.log("RURej");
			break;
		}
	}



	return state;
}

export default usersReducer;
