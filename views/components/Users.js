import React from "react";
import {connect} from "react-redux";

import { readUsers } from "../actions/userActions";

/*
*/
@connect( (store) => {
	return {
		users: store.users
	}
})

/*
const mapStateToProps = state => {
	return {
		todos: state.todos
	}
}

const mapDispatchToProps = dispatch => {
	return {
		toggleTodo: id => dispatch(toggleTodo(id))
	}
}
*/

class Users extends React.Component {
	constructor(props){
		super(props);
		console.log("Users this.props: ", this.props);
	}

	componentWillMount(){
		this.props.dispatch( readUsers() )
	}

	render() {
		const u = this.props.users;
		console.log("Users HERE");

		return <div>
			UserList
			</div>
	}
}

// Working, With mapStateToProps and mapDispatchToProps
//export default connect(mapStateToProps, mapDispatchToProps)(Users);
// Working with @connect also
export default Users;


