import { ILinkProps } from './Link.types';
import { makeStyles } from '@material-ui/core';
import { styles } from './Link.styles';
import React from 'react';

const useStyles = makeStyles(styles);

export const Link: React.FunctionComponent<ILinkProps> = ({ href, onClick, children }) => {
	const classes = useStyles();

	if (onClick) {
		onClick = e => {
			e.preventDefault();

			return onClick?.(e);
		};
	}

	return (
		<a className={classes.link} href={href} onClick={onClick}>
			{children}
		</a>
	);
};
