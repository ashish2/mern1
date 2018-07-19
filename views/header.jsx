import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/core/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Tooltip from '@material-ui/core/Tooltip';

import { withStyles } from '@material-ui/core/styles';

let styles = {
	iconB: {
		marginLeft: -12,
		marginRight: 20,
	},
	flex: {
		flex: 1
	}
};

class Header extends Component {



	render(props) { 

		console.log("pp ", this.props);

		let classes = this.props.classes;


		
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
			</header>
			,

			<AppBar color="default" position="sticky">
				<Toolbar>

					<Menu open={f}>
						<MenuIcon />

						<MenuItem> Profile </MenuItem>
						<MenuItem> Account </MenuItem>
						<MenuItem>
							<Link to='/login'>Login</Link>
						</MenuItem>
					</Menu>

					<Tooltip id="tooltip-top" placement="bottom" title="PayMan!: Remuneration calculations!">
					<Typography variant="title" color="inherit" className={classes.flex}>
			              		PayMan!
					</Typography>
			      		</Tooltip>


					<Button color="inherit" variant="outlined" component={Link} to="/">
						Home
					</Button>

					{
					/*
					<Button color="inherit" component={Link} to="/todoform">
						TodoForm
					</Button>

					<Button color="inherit" component={Link} to="/todos">
						Todos
					</Button>

					<Button color="inherit" component={Link} to="/users">
						Users
					</Button>

					<Button color="inherit" component={Link} to="/users/:id">
						User Det
					</Button>
					*/
					}
					
					<Button color="inherit" component={Link} to="/earningpotential">
						Earning Capacity
					</Button>

					<Button color="inherit" component={Link} to="/earningpotential">
						Check for the best Projects on your Tech
					</Button>
					
					{
					/*
					<Button color="inherit" component={Link} to="/earningpotential">
						Consolidated/Common Interviews
					</Button>
					*/
					}

					<Button color="secondary" variant="contained" component={Link} to="/login">
						Login
					</Button>

				</Toolbar>
			</AppBar>

		);
	}

}


export default withStyles(styles)(Header);
