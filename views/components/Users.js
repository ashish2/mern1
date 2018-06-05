import React from "react";
import {connect} from "react-redux";

import { readUsers } from "../actions/userActions";

/*
@connect( (store) => {
	return {
		users: store.users
	}
})
*/

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

class Users extends React.Component {
	constructor(props){
		super(props);
	}

	componentWillMount(){
		this.props.dispatch( readUsers() )
	}

	render() {
		u = this.props.users;

		return <div>
			UserList
			</div>
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);


