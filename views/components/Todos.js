import React from "react";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";

import thunk from "redux-thunk";

import { toggleTodo, readTodos } from "../actions/todoActions";

import Button from "@material-ui/core/Button";

const mapStateToProps = (store) => {
	return {
		todos: store.todos
	}
}

const mapDispatchToProps = dispatch => {
	return {
		toggleTodo: id => dispatch(toggleTodo(id)),
		// readT working, directly dispath'ing on page load
		///readT: dispatch(readTodos()),
		// readT2 working, dispatch'ing at will by calling `function readT2` whenever we wish to
		readT2: () => dispatch( readTodos())
	};
}

class Todos extends React.Component {
	constructor(props){
		super(props);
	}

	componentWillMount(){
		// readT working
		///readT();
		// readT2 working
		this.props.readT2();
	}
	
	//shouldComponentUpdate (){}

	render() {
		if( !this.props.todos )
			return <button>Nothin</button>
		return (

			<div>
				<button style={{color:'#23b1ec'}}>
					But2
				</button>

				Todos of users here:
				<br />
				<ul>
				{ 
					this.props.todos.todos && 
					this.props.todos.todos.map( (u, i) => 
						<li key={i} onClick={() => toggleTodo(i) }>Todo {u.email}</li>
					)
				}
				</ul>

			</div>
		);
	}
}

// Working, With mapStateToProps and mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Todos);


