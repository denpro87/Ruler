import { AppContext } from 'providers/State';
import { Page, Text } from 'components';
import { Paper, Typography, makeStyles } from '@material-ui/core';
import { styles } from './SafetyRegulations.styles';
import React from 'react';

const useStyles = makeStyles(styles);

export const SafetyScooter: React.FunctionComponent = () => {
	const { state } = React.useContext(AppContext);
	const classes = useStyles({ isDarkMode: state.settings.isDarkMode });

	return (
		<Page title="Scooter" titleSize="medium">
			<Text className={classes.subTitle}>Your safety is important to us</Text>
			<Paper elevation={0} className={classes.container}>
				<Typography className={classes.content}>
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
				</Typography>
			</Paper>
		</Page>
	);
};
