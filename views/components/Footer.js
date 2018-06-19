import React from 'react';
import FilterLink from '../containers/FilterLink';
import {VisibilityFilters} from '../actions';

const Footer = () => {
	<p>
		<b>Footer</b>

		Show: 
		{' '}
		<FilterLink filter={VisibilityFilters.SHOW_ALL}>
			All
		</FilterLink>
		{', '}
		<FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
			ACtive
		</FilterLink>
		{', '}
		<FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
			Comp.l.eted
		</FilterLink>
	</p>
}

export default Footer;

