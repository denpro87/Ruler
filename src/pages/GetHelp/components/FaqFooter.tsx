import { makeStyles, Box, Typography } from '@material-ui/core';
import { BlackIcon } from 'components';
import { styles } from '../GetHelp.styles';

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
