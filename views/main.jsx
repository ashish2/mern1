import React, { Component } from 'react';
import {BrowserRouter as Router, Route, IndexRoute, Switch, Redirect, BrowserHistory} from 'react-router-dom';

import Home from './home';
import Header from './header';
import Login from './Login';
import TodoForm from './todo/TodoForm';
import TodoList from './todo/TodoList';
import EnsureLoggedInContainer from './EnsureLoggedInContainer';

/*
const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        !localStorage.getItem('user')
            ? <component {...props} />
            : <FadeIn> <Redirect to={{ pathname: '/login', state: { from: props.location } }} /> </FadeIn>
    )} />
)
*/

/*
*/
// This Works
//<PrivateRoute exact path="/todoform" component={TodoForm} />
const PrivateRoute = (path, component, ...rest) => (
    <Route {...rest} render={props => (
        !localStorage.getItem('user')
            ? <path.component {...props} />
            : <FadeIn> <Redirect to={{ pathname: '/login', state: { from: props.location } }} /> </FadeIn>
    )} />
)

/*
<PrivateRoute exact path="/todoform" component={TodoForm} />
					<Route component={EnsureLoggedInContainer}>
						<Route exact path="/todoform" component={TodoForm} />
					</Route>
*/


export default class Main extends Component {

	constructor(props) {
		super(props);
	}

	render() { 
		return (
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<PrivateRoute exact path="/todoform" component={TodoForm} />
					<PrivateRoute exact path="/todolist" component={TodoList} />
				</Switch>
		);
	}
}

