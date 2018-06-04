import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import {connect} from 'react-redux';
import { todoList } from '../store/todo/actions';

//@connect
class TodoList extends Component {
	constructor(props) {
		super(props);

		this.state = { data: [] };
		this.callList = this.callList.bind(this);
		//this.props.pollInterval = 5000;
	}

	callList() {
		console.log("callList");

		axios.get('/todo/todos')
		.then(result => {
			console.log("/todos get calll made: ", result);
			this.setState({data: result.data});
		});
	}

	componentDidMount() {
	        //this.callList();
	        ///setInterval(this.callList, this.props.pollInterval);
	        ///setInterval(this.callList, 5000);
		this.props.loadTodos();
	}

	renderLoading() {
		return (
			<p>
				Loading...
			</p>
		);
	}

	render() {
		if (!this.props.todos) 
			return this.renderLoading();

		// This.state not working!!!
		let todoNodes = this.state.data.map( todo => {
			return (
				<DocumentTitle title="Todo List">
				<h1>Todo List</h1>
				<div className="panel panel-primary">
					Date: {todo.date}
				</div>
				</DocumentTitle>
			);
		});
	}
}

export default TodoList;

