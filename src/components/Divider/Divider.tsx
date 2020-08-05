import { IDividerProps } from './Divider.types';
import { makeStyles } from '@material-ui/core';
import { AppContext } from 'providers/State';
import { styles } from './Divider.styles';
import React from 'react';
const useStyles = makeStyles(styles);

export const Divider: React.FunctionComponent<IDividerProps> = () => {
	const { state } = React.useContext(AppContext);
	const classes = useStyles({ isDarkMode: state.settings.isDarkMode });

	return <div className={classes.divider} />;
};
