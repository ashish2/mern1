
export function readUsers() {
	// run ajax call here & add data to payload and 
	// dispatch an event so that reducer can populate store
	return {
		type: "READ_USERS_FULFILLED",
		payload: {
			name: "Will",
			age: 35
		}
	}
}
