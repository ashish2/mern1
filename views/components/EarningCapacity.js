import React from "react";
import {connect} from "react-redux";
//import thunk from "redux-thunk";

import { readUsers, readUsersPromise } from "../actions/userActions";

import Button from '@material-ui/core/Button';

const mapStateToProps = (store) => {
	console.log( "connect store ", store);
	return {
		users: store.users
	}
}

// NOT USED ATM
const mapDispatchToProps = dispatch => {
	return {
		toggleTodo: id => dispatch(toggleTodo(id)),
		readUsers: readUsers
	}
}
// NOT USED ATM-


//@connect(mapStateToProps, mapDispatchToProps)
@connect(mapStateToProps)

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

class EarningCapacity extends React.Component {
	constructor(props){
		super(props);
		//console.log("Users store: ", store);
	}

	componentWillMount(){
		console.log("users.js compMOunted");
		//this.props.dispatch( readUsers(this.props.dispatch) );
		this.props.dispatch( readUsers );

		//this.props.dispatch( readUsersPromise() );
		//readUsers(this.props.dispatch);
		//readUsers();
	}
	
	//shouldComponentUpdate (){}

	render() {
		//const u = this.props.users;
		console.log("Users HERE", this.props);

		if( !this.props.users )
			return <button>Nothin</button>
		return <div>
			UserList u here:
			<br />
			<Button variant="raised" color="primary">
				Hello, World!
			</Button>

			<br />
			<ul>
			{ 
				this.props.users.users && 
				this.props.users.users.map( (u, i) => 
					<li key={i}>{u.email}</li>
				)
			}
			</ul>

			</div>
	}
}

// Working, With mapStateToProps and mapDispatchToProps
//export default connect(mapStateToProps, mapDispatchToProps)(Users);
// Working with @connect also
export default EarningCapacity;


