import React from 'react';

// Core
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { withStyles } from '@material-ui/core/styles';

// Icons
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WbSunny from '@material-ui/icons/WbSunny';
import BeachAccess from '@material-ui/icons/BeachAccess';


const styles = {
	root: {
		width: 500,
		margin: "0 auto",
	},
	flexGrow: {
		flexGrow: 1,
	}
};


class Footer extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			value: "recents"
		};
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {

		const { classes } = this.props;
		const { value } = this.state;

		return (
			<div className={classes.flexGrow}>
				<Grid container spacing={24} alignItems="flex-end">

				<Grid item xs={12}>
				<BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
			        	<BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
			        	<BottomNavigationAction 
						label="Favorites" 
						value="favorites" 
						icon={<FavoriteIcon />} 
					/>
			        	<BottomNavigationAction 
						label="Nearby" 
						value="nearby" 
						icon={<LocationOnIcon />} 
					/>
			        	<BottomNavigationAction 
						label="Sunny" 
						value="sunny" 
						icon={<WbSunny />} 
					/>
			        	<BottomNavigationAction 
						label="Beach" 
						value="Beach" 
						icon={<BeachAccess />} 
					/>
			      	</BottomNavigation>
				</Grid>

				</Grid>

			</div>
		);
	}
}

export default withStyles(styles)(Footer);

