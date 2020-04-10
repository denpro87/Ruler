import { ILinkProps } from './Link.types';
import { Text } from 'components';
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
		<Text
			className={classes.link}
			component="a"
			componentProps={{
				href,
				onClick
			}}
			inheritStyles
		>
			{children}
		</Text>
	);
};
