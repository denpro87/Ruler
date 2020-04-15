import { makeStyles, Typography, Paper } from '@material-ui/core';
import clsx from 'clsx';
import { Page } from 'components';
import { styles } from './Faq.styles';
import { FaqFooter } from '../../../../pages/GetHelp/components';

import React from 'react';

const useStyles = makeStyles(styles);

export const FaqUnlock: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<Page title="How can I unlock a vehicle?" titleSize="medium">
			<Paper elevation={0} className={classes.container}>
				<Typography variant="h6" className={clsx(classes.text, classes.content)}>
					Once you have located a vehicle, unlock it by scanning the QR code or entering the number written below the QR code. If you
					encounter difficulties scanning the QR code, especially during evenings or while it is dark, turn on your flashlight while
					scanning. In case you receive the error “under maintenance” message, it means that the respective vehicle has some fault and is
					not available for usage right now. So please select another nearest available bike/vehicle.
				</Typography>
			</Paper>
			<FaqFooter />
		</Page>
	);
};
