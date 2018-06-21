import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import classNames from 'classnames';
import Icon from '@material-ui/core/Icon';
import Send from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core/styles';

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

class Home extends Component {

	constructor(props) {
		super(props);
	}



	render() {
		console.log("this.props: ", this.props);

		let classes = this.props.classes;
		
		return (
				<div>
					<div>
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
					<div>
						<form className={classes.container} noValidate autoComplete="off">
							<TextField
			        			  id="multiline-static"
			        			  label="Paste JD here"
			        			  multiline
							  fullWidth
			        			  rows="8"
			        			  className={classes.textField}
			        			  margin="normal"
			        			/>

							<Button variant="contained" className={classes.button} color="primary">
								Submit
								<Send className={classes.rightIcon}></Send>
							</Button>
						</form>
					</div>
				</div>
				
		);
	}

}

export default withStyles(styles)(Home);

