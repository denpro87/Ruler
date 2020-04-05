import { Box, Typography, makeStyles } from '@material-ui/core';
import { IProviderProps } from './Provider.types';
import { Icon, IconName } from 'components';
import { styles } from './Provider.styles';

import React from 'react';
const useStyles = makeStyles(styles);

export const Provider: React.FunctionComponent<IProviderProps> = ({ image, title, children, onClick }) => {
	const classes = useStyles();

	return (
		<Box
			className={classes.provider}
			onClick={(e: React.MouseEvent<HTMLElement>): void => {
				e.preventDefault();
				onClick && onClick(e, title);
			}}
		>
			<Box className={classes.li}>
				<img src={image} alt={title} />
				<Typography variant="h5">{title}</Typography>
				<Icon iconName={IconName.Forward} />
			</Box>
			<Box className={classes.text}>{children}</Box>
		</Box>
	);
};
