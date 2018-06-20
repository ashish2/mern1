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
import Divider from "@material-ui/core/Divider";
import { withStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './header';
import Main from './main';
import Footer from './components/Footer';

const styles = {
	root: {
		flexGrow: 1,
	},
	flex: {
		flex: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
};

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
				<CssBaseline />
				<Router>
					<div className="container">

						<div id="header" className="App-header">
							<Header />
						</div>

						<div id="main" className="App-main">
							<Main />
						</div>
						<Divider />

						<div id="footer" className="App-footer">
							<Footer />
						</div>

					</div>
				</Router>

			</div>
		);
	}
}

export default withStyles(styles)(MainHeader);
