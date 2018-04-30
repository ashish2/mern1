import React, { Component } from 'react';

import Header from './header';
import Main from './main';

import Home from './home';
import TodoForm from './TodoForm';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';

class App extends Component {
	render() {
		return (
				<Router>
			<div className="App">

    				<nav>
			        	<Link to="/">Home</Link>
			        	<Link to="/todoform">TodoForm</Link>
				</nav>
				<div>
					<Route path="/" component={Home}/>
					<Route path="/todoform" component={TodoForm}/>
			    	</div>


				<div className="App-header">
					<h2> Company Y </h2>
				</div>


			</div>
				</Router>
		);
	}
}

export default App;
