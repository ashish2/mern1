

const initialStateOfStore = [
	{ name: "u1", age: 1},
	{ name: "u2", age: 2},
	{ name: "u3", age: 3},
];

const userReducer = (state = initialStateOfStore, action) => {
	switch( action.type ) {
		case "UPDATE_USER_NAME": {
			state = {...state, name: action.payload};
			break;
		}
		case "CHANGE_AGE": {
			state = {...state, age: action.payload};
			break;
		}
	}



	return state;
}

export default userReducer;
