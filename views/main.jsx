import React, { Component } from 'react';
import {BrowserRouter as Router, Route, IndexRoute, Switch} from 'react-router-dom';

import Home from './home';
import Header from './header';
import Login from './Login';
import TodoForm from './todo/TodoForm';
//import TodoList from './todo/TodoList';
import EnsureLoggedInContainer from './EnsureLoggedInContainer';


export default class Main extends Component {

	constructor(props) {
		super(props);
	}

	render() { 
		return (
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route component={EnsureLoggedInContainer}>
						<Route exact path="/todoform" component={TodoForm} />
					</Route>
				</Switch>
		);
	}
}

