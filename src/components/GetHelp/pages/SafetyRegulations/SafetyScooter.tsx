import { Page } from 'components';
import { Paper, Typography, makeStyles } from '@material-ui/core';
import { styles } from './SafetyRegulations.styles';
import clsx from 'clsx';

import React from 'react';

const useStyles = makeStyles(styles);

export const SafetyScooter: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<Page title="Scooter" titleSize="medium">
			<Paper elevation={0}>
				<Typography className={clsx(classes.subTitle, classes.text)}>Placerat vestibulum lectus</Typography>
				<Typography className={clsx(classes.content, classes.text)}>
					Viverra adipiscing at in tellus integer feugiat. Sed arcu non odio euismod lacinia at. Egestas sed sed risus pretium. Viverra
					suspendisse potenti nullam ac tortor vitae purus. Pharetra convallis posuere morbi leo urna molestie at elementum.
				</Typography>
				<Typography className={clsx(classes.subTitle, classes.text)}>Amet massa vitae tortor</Typography>
				<Typography className={clsx(classes.content, classes.text)}>
					Vel turpis nunc eget lorem dolor sed. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Ut ornare lectus sit amet est.
					Elit pellentesque.
				</Typography>
			</Paper>
		</Page>
	);
};
