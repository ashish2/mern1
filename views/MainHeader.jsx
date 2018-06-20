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
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { withStyles } from '@material-ui/core/styles';


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
	//
	constructor(props){

		super(props);

		this.state = {
			drawer: {
				left: false,
			}
		}
	}

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
	//
	toggleDrawer = ( side, open ) => () => {
		this.setState({
			drawer: {
				[side]: open,
			}
		});

		
	}


	render() {

		return (
			<div className="App">
				<Router>
					<div className="container">
						
						<div id="drawer">
							<Button onClick={this.toggleDrawer('left', true)}>
								Left Drawer
							</Button>
							<Drawer open={this.state.drawer.left} onClose={this.toggleDrawer('left', false)} variant="permanent">
								<div
								    tabIndex={0}
								    role="button"
								    onClick={this.toggleDrawer('left', false)}
								    onKeyDown={this.toggleDrawer('left', false)}
								 >
									<div className={{width: 250}}>
										<ul>
											<li>L1</li>
											<li>L2</li>
											<li>L3</li>
										</ul>

								    		<Divider />

										<ul>
											<li>L4</li>
											<li>L5</li>
										</ul>
								    	</div>
								</div>
							</Drawer>
						</div>

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
