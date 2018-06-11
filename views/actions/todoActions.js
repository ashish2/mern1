
export function toggleTodo(id) {
	console.log("toggleTodo id: ", id);
	return {
		type: "READ_TODOS_START",
		payload: {
			name: "Will",
			age: 35
		}
	}
}

export function readUsers() {
	return {
		type: "READ_USERS_FULFILLED",
		payload: {
			name: "Will",
			age: 35
		}
	}
}
