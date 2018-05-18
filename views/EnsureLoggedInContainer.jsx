import React from "react";

class EnsureLoggedInContainer extends React.Component {

	constructor(props) {
		super(props);

		//this.props = props;
		this.state = {
			isLoggedIn: true,
		};
	}

	componentDidMount() {
		const {dispatch, currentURL} = this.props;

		if(!this.state.isLoggedIn) {
			console.log("!isloggedin");
			dispatch(setRedirectUrl(currentURL));
			//browserHistory.replace("/login");
		}
	}

	render() {
		console.log("this: ", this);
		console.log("this.state: ", this.state);

		if(this.state.isLoggedIn) {
			console.log("isloggedin: ", this.state.isLoggedIn );
			//return this.props.children;
			// Pass to children Routes, or else,
			// Redirect to the route User was going to (next parameter in url)
			return null;
		} else {
			// Redirect to Login with next parameter as this Route which user hit
			console.log("isloggedin else");
			return null;
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


