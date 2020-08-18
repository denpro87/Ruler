import { Page, Text } from 'components';
import { Paper, makeStyles } from '@material-ui/core';
import { styles } from './SafetyRegulations.styles';
import clsx from 'clsx';

import React from 'react';

const useStyles = makeStyles(styles);

export const SafetyScooter: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<Page title="Scooter" titleSize="medium">
			{/* <Paper elevation={0}> */}
			<Text className={clsx(classes.subTitle, classes.text)}>Your safety is important to us</Text>
			<Text className={clsx(classes.content, classes.text)} black>
				Always follow the following rules while you are looking to ride via scooter.
				<br />
				<br />
				1. Do a pre-ride check: Accelerator, Brake and Handle
				<br />
				2. Always follow helmet laws
				<br />
				3. Park properly at the designated Parking sites.
				<br />
				4. Apply brakes to slow down or stop
				<br />
				5. Take care of road obstructions
				<br />
				6. Always follow traffic rules
				<br />
				7. Do not use your phone while riding
			</Text>
			{/* </Paper> */}
		</Page>
	);
};
