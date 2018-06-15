import React, { Component } from "react";
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default class Login extends Component {

	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};

		console.log("Login props: ", props);

		// If isAuthenticated True then redirect to the path in url
		// else show login
		//if(isAuthenticated)
			//<Redirect path="">
	}

	componentDidCatch(error, info) {
		// Display fallback UI
		this.uierror = true;
		//logErrorToMyService(error, info);
	}

	validateForm() {
		return this.state.email.length > 0 && this.state.password.length > 0;
	}

	handleChange(event){
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	handleSubmit(event){
		event.preventDefault();
	}

	render() {
		if (this.uierror) 
			return (
				<span> Something went wrong!</span>
			);
	    return (
	      <div className="Login">
	        <form onSubmit={this.handleSubmit}>
	          <FormGroup bssize="large">
	            <FormControlLabel control={
			    <Switch
		             checked="true"
		             value="gilad"
		            />
		    }>Email</FormControlLabel>
	            <FormControl
	              autoFocus
	              type="email"
	              value={this.state.email}
	              onChange={this.handleChange}
	            />
	          </FormGroup>
	          <FormGroup bssize="large">
	            <FormControlLabel control={
			    <Switch
		             checked="false"
		             value="gilad"
		            />
		    }>Password</FormControlLabel>
	            <FormControl
	              value={this.state.password}
	              onChange={this.handleChange}
	              type="password"
	            />
	          </FormGroup>
	          <Button
	            bssize="large"
	            disabled={!this.validateForm()}
	            type="submit"
	          >
	            Login
	          </Button>
	        </form>
	      </div>
	    );
	}

}
