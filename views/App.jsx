import React, { Component } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2> Company Y </h2>
				</div>
				<TodoForm />
				<TodoList />
			</div>
		);
	}
}

export default App;
