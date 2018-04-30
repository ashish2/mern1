import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';

import Header from './header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


export default class Main extends Component {

	render() { 
		return (
			<Switch>
				<Route exact path='' component={Header} />
				<Route exact path='/' component={Header} />
				<Route exact path='/todoform' component={TodoForm} />
				<Route exact path='/todolist' component={TodoList} />
				<Route exact path='/users' component={Users} />
				<Route path='/users/:id' component={UserDetails} />
			</Switch>
		);
	}
}

