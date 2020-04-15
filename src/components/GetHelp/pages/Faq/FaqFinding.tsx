import clsx from 'clsx';
import { makeStyles, Typography, Paper } from '@material-ui/core';
import { Stack } from '@fluentui/react';
import { Page } from 'components';
import { styles } from './Faq.styles';
import { FaqFooter } from '../../../../pages/GetHelp/components';

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
