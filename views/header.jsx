import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';


export default class Header extends Component {

	render() { 
		
		return (
		<header>
		<nav>
		<ul>
		<li><Link to='/'>Home</Link></li>
		<li><Link to='/users'>Users</Link></li>
		<li><Link to='/users/:id'>User Det</Link></li>
		</ul>
		</nav>
		</header>
		);
	}

}
