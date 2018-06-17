import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/core/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircle from "@material-ui/icons/AccountCircle";

export default class Header extends Component {

	render() { 
		
		let f = false;
		return (
			<header>
			<nav>
			<ul>
			<li><Link to='/'>Home</Link></li>
			<li><Link to='/login'>Login</Link></li>
			<li><Link to='/todoform'>TodoForm</Link></li>
			<li><Link to='/todolist'>TodoList</Link></li>
			<li><Link to='/todos'>Todos</Link></li>
			<li><Link to='/users'>Users</Link></li>
			<li><Link to='/users/:id'>User Det</Link></li>
			</ul>
			</nav>
			</header>,

					<AppBar color="secondary" position="static">
						<Toolbar>
							<IconButton color="inherit" aria-label="Menu">
								<AccountCircle />
							</IconButton>

							<Menu open={f}>
								<MenuIcon />

								<MenuItem> Profile </MenuItem>
								<MenuItem> Account </MenuItem>
							</Menu>

							<Typography variant="title" color="inherit">
								Title
							</Typography>

							<Button color="inherit">
								Login
							</Button>
						</Toolbar>
					</AppBar>

		);
	}

}
