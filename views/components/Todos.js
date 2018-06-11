import React from "react";
import {connect} from "react-redux";
//import thunk from "redux-thunk";

import { toggleTodo } from "../actions/todoActions";

const mapStateToProps = (store) => {
	console.log( "connect store ", store);
	return {
		todos: store.todos
	}
}

const mapStateToProps = state => {
	return {
		todos: state.todos
	}
}

const mapDispatchToProps = dispatch => {
	return {
		toggleTodo: id => dispatch(toggleTodo(id)),
		readUsers: readUsers
	}
}

class Todos extends React.Component {
	constructor(props){
		super(props);
		//console.log("Users store: ", store);
	}

	componentWillMount(){
		console.log("todos.js compMOunted");
		//this.props.dispatch( readUsers(this.props.dispatch) );
		//this.props.dispatch( readUsers );

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
			<ul>
			{ 
				this.props.todos.todos && 
				this.props.todos.todos.map( (u, i) => 
					Todo of: <li key={i} onClick={() => toggleTodo(i) }>{u.email}</li>
				)
			}
			</ul>

			</div>
	}
}

// Working, With mapStateToProps and mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Todos);


