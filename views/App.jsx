import React, { Component } from 'react';

import Header from './header';
import Main from './main';


class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />

				<div className="App-header">
					<h2> Company Y </h2>
				</div>

				<Main />

				//<TodoForm />
				//<TodoList data={this.state.data} />
			</div>
		);
	}
}

export default App;
