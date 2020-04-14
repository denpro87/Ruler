import clsx from 'clsx';
import { makeStyles, Typography } from '@material-ui/core';
import { Stack } from '@fluentui/react';
import { Page } from 'components';
import { styles } from './Faq.styles';
import { FaqFooter } from '../../../../pages/GetHelp/components';

import React from 'react';

const useStyles = makeStyles(styles);

export const FaqLock: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<>
			<Page title="I am done with the parking. How do I lock?" titleSize="medium">
				<Stack horizontalAlign="stretch" grow={1} tokens={{ childrenGap: 0 }} verticalFill>
					<Stack.Item>
						<Typography variant="h6" className={clsx(classes.text, classes.content)}>
							Scooter: Locking the scooter is as easy as locking your phone. Simply, tap Lock on your app that appears after you have
							finished the ride. Please note that the parking pins that appear on the map are preferred parking spaces and function as a
							parking guide for riders.
							<br />
							<br />
							Bikes: For Bikes, simply push down the rear wheel lever. If done correctly, you will hear a sound indicating that the bike has
							been locked.
						</Typography>
					</Stack.Item>
				</Stack>
				<FaqFooter />
			</Page>
		</>
	);
};
