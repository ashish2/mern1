import React, { Component } from 'react';
import {connect} from "react-redux";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const CustomTableCell = withStyles(theme => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.white
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: "auto",
	},
	table: {
		minWidth: 700,
	},
	row: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.background.default,
		},
	},
});


/*
const mapStateToProps = (store) => {
}

const mapDispatchToProps = (dispatch) => {
}
*/


class CustomTable extends React.Component {

	constructor(props) {
		super(props);

		console.log("Custom ", this.props);
		console.log("t ", this.props.t);
	}

	render() {
		//const { classes } = this.props;
		//console.log( "calsses ", classes);
		//console.log( "this.props ", this.props);
		
		let id = 0;
		return (
			this.props.t.map(n => {
				return ( 
					<Paper key={id++}>
						Name: {n.name } , Cost: {n.cost}
					</Paper>
				)
			})
		);
	}

}

export default withStyles(styles)(CustomTable);
//export default (CustomTable);

