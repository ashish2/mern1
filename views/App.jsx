import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './header';
import Main from './main';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2> Company Y </h2>
				</div>

				<Router>
					<div>
						<Header />
						<Main />
					</div>
				</Router>




			</div>
		);
	}
}

export default App;
