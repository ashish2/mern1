

const userReducer = (state = {name: "Will", age: 35}, action) => {
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
