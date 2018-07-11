import React, { Component } from 'react';
import {BrowserRouter as Router, Route, IndexRoute, Switch, Redirect, BrowserHistory} from 'react-router-dom';

import Home from './home';
import Header from './header';
import Login from './Login';
import TodoForm from './todo/TodoForm';
//import TodoList from './todo/TodoList';
import Todos from './components/Todos';
import Users from './components/Users';
import EarningCapacity from './components/EarningCapacity';

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
		//console.log("lSTo", localStorage);
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
					<PrivateRoute exact path="/todos" component={Todos} />
					<PrivateRoute exact path="/users" component={Users} />
					<PrivateRoute exact path="/earningcapacity" component={Users} />
				</Switch>
		);
	}
}

