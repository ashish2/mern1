import React, { Component } from 'react';
import {BrowserRouter as Router, Route, IndexRoute, Switch} from 'react-router-dom';

import Home from './home';
import Header from './header';
import TodoForm from './todo/TodoForm';
//import TodoList from './todo/TodoList';


export default class Main extends Component {

	constructor(props) {
		super(props);
	}

	render() { 
		return (
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/todoform" component={TodoForm} />
				</Switch>
		);
	}
}

