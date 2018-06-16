import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";


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
					<AppBar color="primary" position="fixed">
						App bar some
						<Toolbar>

							<Button color="red">
								Button
							</Button>

							<IconButton>
								Icon
							</IconButton>
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
