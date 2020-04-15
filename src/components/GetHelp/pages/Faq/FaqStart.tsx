import clsx from 'clsx';
import { makeStyles, Typography } from '@material-ui/core';
import { Stack } from '@fluentui/react';
import { Page } from 'components';
import { styles } from './Faq.styles';
import { FaqFooter } from '../../../../pages/GetHelp/components';

import React from 'react';

const useStyles = makeStyles(styles);

export const FaqStart: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<Page title="I have unlocked the scooter. How can I start the ride?" titleSize="medium">
			<Stack horizontalAlign="stretch" grow={1} tokens={{ childrenGap: 0 }} verticalFill>
				<Stack.Item>
					<Typography variant="h6" className={clsx(classes.text, classes.content)}>
						To start your scooter ride, place one foot firmly on the baseboard and use your other foot to push off against the ground a few
						times. Once you’ve gained some speed, press on the throttle near your right thumb to accelerate. Familiarize yourself with the
						throttle and squeeze the hand brake to slow down when needed.
					</Typography>
				</Stack.Item>
			</Stack>
			<FaqFooter />
		</Page>
	);
};
