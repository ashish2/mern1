import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './header';
import Main from './main';

class App extends Component {
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

		// return this.props.children;
		return (
			<div className="App">
				<div className="App-header">
					<h2> Company Y </h2>
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

/*
function mapStateProps(state) {
	return {
		isLoggedIn: state.loggedIn,
		redirectUrl: state.redirectUrl
	}
}


//export default App;
export default connect(mapStateToProps)(App);
*/
export default App;
