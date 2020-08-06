import clsx from 'clsx';
import { Icon } from 'components';
import { ISearchBoxProps } from './SearchBox.types';
import { InputBase, makeStyles } from '@material-ui/core';
import { AppContext } from 'providers/State';
import { styles } from './SearchBox.styles';
import React from 'react';
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
			<div className={classes.searchIcon}>{<Icon iconName="search" />}</div>
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
