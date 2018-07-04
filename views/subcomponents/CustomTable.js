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
		//color: theme.palette.white
		color: "#fff"
	},
	body: {
		fontSize: 14,
	},
	footer: {
		fontSize: 14,
		color: "red",
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
		const  classes = this.props.classes;
		//console.log( "calsses ", classes);
		//console.log( "this.props ", this.props);
		const tLen = this.props.t.length;
		
		let id = 0;
		return ( 
			<Paper key={id++} className={classes.root}>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<CustomTableCell className={classes.footer}>
								Tech
							</CustomTableCell>
							<CustomTableCell numeric className={classes.head}>
								Cost* (Approx.)
							</CustomTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
					{
					this.props.t.map(n => {
						console.log(" id: ", id, " length ", tLen);

						var tableRowClassName = classes.row;

						console.log("OUT ", tableRowClassName);
						if(id == tLen) {
							tableRowClassName = classes.footer;
							console.log("IF ", tableRowClassName);
						}


						return (
							<TableRow className={tableRowClassName} key={id++}>
								<CustomTableCell component="th" scope="row">
									{n.name}
								</CustomTableCell>
								<CustomTableCell numeric>
									{n.cost}
								</CustomTableCell>
							</TableRow>
						);

					})
					}
					</TableBody>
				</Table>
			</Paper>
		
		);	
	}

}

export default withStyles(styles)(CustomTable);
//export default (CustomTable);

