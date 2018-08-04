import React, { Component } from 'react';
import {connect} from "react-redux";

import thunk from "redux-thunk";

import { postHomeAction, jdChangeAction, submitButtonChangeAction, submitButtonOffAction } from "./actions/homeActions";
import CustomTableTechCost from './subcomponents/CustomTableTechCost';
import CustomTableJob from './subcomponents/CustomTableJob';
import CustomTableProject from './subcomponents/CustomTableProject';

import DocumentTitle from 'react-document-title';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import Icon from '@material-ui/core/Icon';
import Send from '@material-ui/icons/Send';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import langs from "./langs/en/index";


const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
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
	root: {
	            display: 'flex',
	            alignItems: 'center',
	},
	wrapper: {
	            margin: theme.spacing.unit,
	            position: 'relative',
	},
	buttonSuccess: {
	            backgroundColor: green[500],

	            '&:hover': {
	                  backgroundColor: green[700],
	            },
	},
	fabProgress: {
	            color: green[500],
	            position: 'absolute',
	            top: -6,
	            left: -6,
	            zIndex: 1,
	},
	buttonProgress: {
	            color: green[500],
	            position: 'absolute',
	            top: '50%',
	            left: '50%',
	            marginTop: -12,
	            marginLeft: -12,
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		//color: theme.palette.text.secondary,
	},


});

//

const mapStateToProps = (store) => {
	return {
		home: store.home,
		ui: store.home.ui,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		submit: ev => {
			// persist not the right way of doing it bcoz of event-pooling, Maybe
			//ev.persist();

			ev.preventDefault();
			// Change submitButton UI
			dispatch( submitButtonOffAction(ev) );
			dispatch(postHomeAction(ev));
		},
		jdChange: ev => {
			let t = ev.target;
			let v = ev.target.value;

			dispatch( jdChangeAction(ev) );
		},
		/*
		submitButtonChange: ev => {
			// loading change
			// dispatch an event to change loading state to true
			dispatch( submitButtonChangeAction(ev) );
		},
		*/
		ctrlEnter: ev => {
			// TODO
			// if keyCode is 13 (Enter) and ctrlKey was true, then submit form
			if( ev.keyCode == 13 && ev.ctrlKey == true ) {
				console.log("cE this ", " ev ", ev);
				//this.props.submit(ev);
			}
		},

	};
}
//

class Home extends Component {

	/*
	*/
	constructor(props) {
		super(props);

		console.log("props ", this.props);
		this.ctrlEnter = this.ctrlEnter.bind(this);
	}

	onChange(e) {
		console.log("onCh");
	}

	submit(e) {

		e.preventDefault();
		// Dispatch an action event
		// then fire axios


		//let data = new FormData(e.target);
		console.log("e ", e);
	}

	ctrlEnter(ev) {
		// TODO
		// if keyCode is 13 (Enter) and ctrlKey was true, then submit form
		if( ev.keyCode == 13 && ev.ctrlKey == true ) {
			console.log("self cE this ", this, " ev ", ev);
			this.props.submit(ev);
		}
	}

	/*
	*/
	componentDidMount() {
		console.log( "cDM, props ", this.props);

		let f = this.props.location.pathname.replace("/", "");
		//let path = "langs/en/"+f;
		//import l from "langs/en/"+f;
		//import(`${path}`).then(module => this.setState({ l: module.default }));
	}

	render() {

		let classes = this.props.classes;
		
		let f = this.props.location.pathname.replace("/", "");
		if(f == "")
			f = "home";

		console.log("F f ", f);

		let l = langs[f];

		console.log("L l ", l);

		// TODO: FTM, success shud be true/false depending on response from API
		let success = false;

		const buttonClassname = classNames({
	          //[classes.buttonSuccess]: success,
	          [classes.buttonSuccess]: this.props.ui.dataSuccess,
	        });

		//let beforeStr = "Before answering the question, What is your expected salary? at your new job/interview, make sure you just check what is it that others are earning in the industry for approx. the same JD.";
		//let beforeStr = "Before answering the question, `What is your expected salary?`, in your new job interview, make sure you check what is the salary that others are getting for the same JD as yours.";

		//let loading = true;
		
		return (
			<div className={classes.button}>

				<div className={classes.container,classes.button}>
			        <Grid container spacing={8} alignItems="flex-end">
				<Grid item xs={6}>
				<Paper className={classes.paper}>
					<Typography variant="title" gutterBottom>
						{l.homeStr}
					</Typography>
					<div>
						<div>{l.justStr}</div>
						<div>{l.beforeStr}</div>
					</div>
				</Paper>
				</Grid>
				<Grid item xs={6}>
				<Paper className={classes.paper}>
					<Typography variant="title" gutterBottom>
						{l.sampleJDHeader}
					</Typography>
					<div> 
						<div>
							{l.sampleJDDesc}
						</div>
					</div>
				</Paper>
				</Grid>
				</Grid>
				</div>

				<div className={classes.container,classes.button}>

					<form id="jdfid" encType="application/x-www-form-urlencoded" className={classes.container} noValidate autoComplete="off" onSubmit={this.props.submit}>
				
						<FormControl fullWidth margin="dense">
							<TextField
		        					id="multiline-static"
							  	name="jd"
		        				  	label={l.pasteJDLabel}
		        				  	multiline
							  	fullWidth
							  	required
		        				  	rows="10"
		        				  	cols="60"
								className={classes.textField}
		        				  	margin="normal"
								onChange={this.props.jdChange}
								onKeyDown={this.ctrlEnter}
		        				/>
						</FormControl>
						
						<FormControl>
							<Tooltip id="tooltip-top" placement="bottom" title="Submit">
							<Button 
								disabled={this.props.ui.submitLoading} 
								type="submit" 
								variant="raised" 
								//className={classes.button} 
								className={buttonClassname} 
								color="secondary"
								//onClick={this.props.submitButtonChange}
							>
								Submit
								<Send className={classes.rightIcon}></Send>
							</Button>
							</Tooltip>
							{this.props.ui.submitLoading && <CircularProgress size={24} className={classes.buttonProgress} />}
							

						</FormControl>
					</form>
				</div>

			 	{this.props.home && this.props.home.data
					&&
					<div className="col-lg-12">
						<CustomTableTechCost t={this.props.home.data.technologies} />
					</div>
				}
			 	
				{this.props.home && this.props.home.data
					&&
					<div className="col-lg-12">
						<CustomTableJob t={this.props.home.data.technologies} />
					</div>
				}

				{this.props.home && this.props.home.data
					&&
					<div className="col-lg-12">
						<CustomTableProject t={this.props.home.data.technologies} />
					</div>
				}

			</div>
				
		);
	}

}

export default withStyles(styles) (connect(mapStateToProps, mapDispatchToProps)(Home) );

//export default withStyles(styles)(Home);

