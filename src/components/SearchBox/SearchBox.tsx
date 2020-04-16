import clsx from 'clsx';
import { BlackIcon } from 'components';
import { ISearchBoxProps } from './SearchBox.types';
import { InputBase, makeStyles } from '@material-ui/core';
import { styles } from './SearchBox.styles';
import React from 'react';
const useStyles = makeStyles(styles);

export const SearchBox: React.FunctionComponent<ISearchBoxProps> = ({ onChange, className }) => {
	const classes = useStyles();

	return (
		<div className={clsx(classes.inputWrapper, className)}>
			<div className={classes.searchIcon}>{<BlackIcon iconName="search" />}</div>
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
