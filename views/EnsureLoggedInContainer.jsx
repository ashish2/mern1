import React from "react";
import Login from "./Login";

class EnsureLoggedInContainer extends React.Component {

	constructor(props) {
		super(props);

		//this.props = props;
		this.state = {
			isLoggedIn: true,
		};
	}

	componentDidMount() {
		//const {dispatch, currentURL} = this.props;

		if(!this.state.isLoggedIn) {
			//dispatch(setRedirectUrl(currentURL));
			//browserHistory.replace("/login");
		}
	}

	render() {
		//const ThemeContext = React.createContext('light');
		//      <ThemeContext.Consumer>
		//          {theme => <Component {...props} theme={theme} />}
		//      </ThemeContext.Consumer>
		//

		console.log("this: ", this);
		//console.log("localStorage: ", localStorage);

		if(this.state.isLoggedIn) {
			console.log("isloggedin: ", " this.props: ", this.props);
			console.log("isloggedin: ", this.state.isLoggedIn, " children: ", this.props.children );
			//return this.props.children;
			// Pass to children Routes, or else,
			// Redirect to the route User was going to (next parameter in url)
			//return null;
			//return this.props.children;
			//<Redirect
			return null;
		} else {
			// Redirect to Login with next parameter as this Route which user hit
			console.log("isloggedin else");
			return <Login nextpage={this.props.location}/>;
		}

	}

}

/*
function mapStateToProps(state, ownProps) {
	return {
		isLoggedIn: state.loggedIn,
		currentURL: ownProps.location.pathname
	}
}

//export default EnsureLoggedInContainer
export default connect(mapStateToProps)(EnsureLoggedInContainer)
*/
export default EnsureLoggedInContainer


