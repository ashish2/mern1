import React, { Component } from 'react';
import {connect} from "react-redux";

import thunk from "redux-thunk";

import { postHome } from "./actions/homeActions";


import DocumentTitle from 'react-document-title';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import classNames from 'classnames';
import Icon from '@material-ui/core/Icon';
import Send from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core/styles';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
	  button: {
	      margin: theme.spacing.unit,
	  },
	  leftIcon: {
	      marginRight: theme.spacing.unit,
	  },
	  rightIcon: {
	      marginLeft: theme.spacing.unit,
	  },
	  iconSmall: {
	      fontSize: 20,
	  },
});

//

const mapStateToProps = (store) => {
	return {
		home: store.home,
		abc: "ABC"
	}
}

const mapDispatchToProps = dispatch => {
	return {
		submit: ev => {
			// persist not the right way of doing it bcoz of event-pooling, Maybe
			//ev.persist();
			ev.preventDefault();
			dispatch(postHome(ev));
		}
	};
}
//

class Home extends Component {

	/*
	constructor(props) {
		super(props);

		console.log("props ", this.props);
	}
	*/

	onChange(e) {
		console.log("onCh");
	}

	handleSubmit(e) {

		e.preventDefault();
		// Dispatch an action event
		// then fire axios


		//let data = new FormData(e.target);
		console.log("e ", e);
		console.log("e.type ", e.type);
	}



	render() {
		console.log("this.props: ", this.props);
		//console.log("submit ", submit);

		let classes = this.props.classes;
		
		return (
				<div className="row">

					<div className="col-lg-12">
						<h1>This is HOME!</h1>
						<div>
							<p>
								Just paste your job description here and get to know what others are earning in the industry for the same Job Description that you just got in your email.
							</p>
							<p>
								Before answering the question, What is your expected salary? at your new job/interview, make sure you just check what is it that others are earning in the industry for approx. the same JD.
							</p>
						</div>
					</div>

					<div className="col-lg-12">
						<form className={classes.container} noValidate autoComplete="off" onSubmit={this.props.submit}>
							<FormControl>
								<TextField
			        				  id="multiline-static"
								  name="jd"
			        				  label="Paste JD here"
			        				  multiline
								  fullWidth
			        				  rows="8"
			        				  className={classes.textField}
			        				  margin="normal"
			        				/>
							</FormControl>
							
							<FormControl>
								<Button type="submit" variant="raised" className={classes.button} color="secondary">
									Submit
									<Send className={classes.rightIcon}></Send>
								</Button>
							</FormControl>

						</form>
					</div>

				</div>
				
		);
	}

}

export default withStyles(styles) (connect(mapStateToProps, mapDispatchToProps)(Home) );

//export default withStyles(styles)(Home);

