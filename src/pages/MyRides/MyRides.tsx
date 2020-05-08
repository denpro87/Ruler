import { Box, makeStyles } from '@material-ui/core';
import { FullPage, GreenButton, Text } from 'components';
import { Stack } from '@fluentui/react';
import { styles } from './MyRides.styles';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import Background from './images/bg.svg';
import React from 'react';

const useStyles = makeStyles(styles);

export const MyRides: React.FunctionComponent = () => {
	const classes = useStyles();
	const history = useHistory();
	const { formatMessage } = useIntl();

	return (
		<FullPage canGoBack title={formatMessage({ id: 'my_rides.title' })} titleSize="large">
			<Box className={classes.backgroundContainer}>
				<img src={Background} alt="background" />
			</Box>
			<Box className={classes.content}>
				<Stack>
					<Stack.Item>
						<Text className={classes.descriptionText} block>
							{formatMessage({ id: 'my_rides.text.description' })}
						</Text>
						<GreenButton className={classes.toHomeButton} onClick={(): void => history.push('/home')}>
							{formatMessage({ id: 'button.to_home' })}
						</GreenButton>
					</Stack.Item>
				</Stack>
			</Box>
		</FullPage>
	);
};
