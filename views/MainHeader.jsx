import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/core/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircle from "@material-ui/icons/AccountCircle";


import Header from './header';
import Main from './main';

class MainHeader extends Component {
	// Writing for Login/Logout
	componentDidUpdate(prevProps) {
		/*
		const { dispatch, redirectUrl } = this.props;
		const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn;
		const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn;

		if(isLoggingIn) {
			dispatch(navigateTo(redirectUrl));
		} else if(isLoggingOut) {
			// do any kind of cleanup or post-logout redirection here

		}
		*/


	}
	// ---


	render() {
		return (
			<div className="App">
				<div className="App-header">
					<AppBar color="secondary" position="static">
						<Toolbar>
							<IconButton color="inherit" aria-label="Menu">
								<AccountCircle />
							</IconButton>

							<Menu open="false">
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

export default MainHeader;
