import { IDividerProps } from './Divider.types';
import { makeStyles } from '@material-ui/core';
import { styles } from './Divider.styles';
import React from 'react';
const useStyles = makeStyles(styles);

export const Divider: React.FunctionComponent<IDividerProps> = () => {
	const classes = useStyles();

	return <div className={classes.divider} />;
};
