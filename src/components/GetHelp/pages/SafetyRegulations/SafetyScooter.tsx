import { makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { Page } from 'components';
import { Stack } from '@fluentui/react';
import { styles } from './SafetyRegulations.styles';

import React from 'react';

const useStyles = makeStyles(styles);

export const SafetyScooter: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<Page title="Scooter" titleSize="medium">
			<Stack horizontalAlign="stretch" grow={1} tokens={{ childrenGap: 0 }} verticalFill>
				<Stack.Item>
					<Typography className={clsx(classes.subTitle, classes.text)}>Placerat vestibulum lectus</Typography>
					<Typography className={clsx(classes.content, classes.text)}>
						Viverra adipiscing at in tellus integer feugiat. Sed arcu non odio euismod lacinia at. Egestas sed sed risus pretium. Viverra
						suspendisse potenti nullam ac tortor vitae purus. Pharetra convallis posuere morbi leo urna molestie at elementum.
					</Typography>
				</Stack.Item>
				<Stack.Item>
					<Typography className={clsx(classes.subTitle, classes.text)}>Amet massa vitae tortor</Typography>
					<Typography className={clsx(classes.content, classes.text)}>
						Vel turpis nunc eget lorem dolor sed. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Ut ornare lectus sit amet
						est. Elit pellentesque.
					</Typography>
				</Stack.Item>
			</Stack>
		</Page>
	);
};
