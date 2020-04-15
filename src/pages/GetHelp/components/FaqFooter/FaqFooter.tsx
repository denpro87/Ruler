import { BlackIcon } from 'components';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { styles } from './FaqFooter.styles';

import React from 'react';

const useStyles = makeStyles(styles);

export const FaqFooter: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<div className={classes.faqFooter}>
			<Box className={classes.li}>
				<BlackIcon iconName="support"></BlackIcon>
				<Typography variant="h6">Ruler Support</Typography>
			</Box>
			<Box className={classes.li}>
				<BlackIcon iconName="ride-history"></BlackIcon>
				<Typography variant="h6">Nov 24</Typography>
			</Box>
		</div>
	);
};
