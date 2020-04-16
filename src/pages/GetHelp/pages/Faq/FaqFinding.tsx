import { FaqFooter } from '../../components';
import { Page } from 'components';
import { Paper, Typography, makeStyles } from '@material-ui/core';
import { styles } from './Faq.styles';
import clsx from 'clsx';

import React from 'react';

const useStyles = makeStyles(styles);

export const FaqFinding: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<Page title="Finding a bike or vehicle" titleSize="medium">
			<Paper elevation={0} className={classes.container}>
				<Typography variant="h6" className={clsx(classes.text, classes.content)}>
					To find a bike or vehicle, simply open the Ruler app and you would see all available vehicles/bikes near you. Visit the respective
					place and that’s it. You are all set to star your ride.
				</Typography>
			</Paper>
			<FaqFooter />
		</Page>
	);
};
