import React, { Component } from 'react';

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
	        this.callList();
	        //setInterval(this.callList, this.props.pollInterval);
	        setInterval(this.callList, 5000);
	}

	render() {
		// This.state not working!!!
		let todoNodes = this.state.data.map( todo => {
			return (
				<h1>Todo List</h2>
				<div className="panel panel-primary">
					Date: {todo.date}
				</div>
			);
		});
	}
}

export default TodoList;

