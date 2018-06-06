
export function readUsers() {
	// run ajax call here & add data to payload and 
	// dispatch an event so that reducer can populate store
	// With promise,
	// return { type: READ_USERS", payload: axios.get(usersApiUrl) }
	axios
	.get('/api/v1/todos')
	.then(result => {
		// Dispatch an event with payload
		console.log("/todos post calll made: ", result);
	})
	.catch(err => {
		console.log("/todos get calll errored: ", err);
	});
	/*
	return {
		type: "READ_USERS_FULFILLED",
		payload: {
			name: "Will",
			age: 35
		}
	}
	*/
}
