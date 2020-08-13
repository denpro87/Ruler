import { AppContext } from 'providers/State';
import { ISearchBoxProps } from './SearchBox.types';
import { Icon } from 'components';
import { InputBase, makeStyles } from '@material-ui/core';
import { styles } from './SearchBox.styles';
import React from 'react';
import clsx from 'clsx';
const useStyles = makeStyles(styles);

export const SearchBox: React.FunctionComponent<ISearchBoxProps> = ({ onChange, className }) => {
	const {
		state: {
			settings: { isDarkMode }
		}
	} = React.useContext(AppContext);
	const classes = useStyles({ isDarkMode });

	return (
		<div className={clsx(classes.inputWrapper, className)}>
			<Icon iconName="search" className={classes.searchIcon} />
			<InputBase
				placeholder="Search…"
				classes={{
					root: classes.inputRoot,
					input: classes.inputInput
				}}
				inputProps={{ 'aria-label': 'search' }}
				onChange={onChange}
			/>
		</div>
	);
};
