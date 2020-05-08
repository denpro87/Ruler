import { Box, makeStyles } from '@material-ui/core';
import { FullPage, GreenButton, Text } from 'components';
import { Stack } from '@fluentui/react';
import { styles } from './MyRides.styles';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import Background from './images/bg.svg';
import React from 'react';
import clsx from 'clsx';
import loadingBackground from './images/loading-bg.svg';

const useStyles = makeStyles(styles);

export const MyRides: React.FunctionComponent = () => {
	const classes = useStyles();
	const history = useHistory();
	const { formatMessage } = useIntl();
	const [loading, setLoading] = React.useState(true);
	React.useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	});

	return (
		<FullPage canGoBack title={loading ? '' : formatMessage({ id: 'my_rides.title' })} titleSize="large">
			<Box
				className={clsx(
					{ [classes.backgroundContainer]: true },
					{ [classes.loadingBackgroundArea]: loading },
					{ [classes.backgroundArea]: !loading }
				)}
			>
				<img src={loading ? loadingBackground : Background} alt="background" />
			</Box>
			<Box className={classes.content}>
				<Stack>
					<Stack.Item>
						<Text className={classes.descriptionText} block>
							{loading ? formatMessage({ id: 'my_rides.text.loading' }) : formatMessage({ id: 'my_rides.text.description' })}
						</Text>
						{!loading && (
							<GreenButton className={classes.toHomeButton} onClick={(): void => history.push('/home')}>
								{formatMessage({ id: 'button.to_home' })}
							</GreenButton>
						)}
					</Stack.Item>
				</Stack>
			</Box>
		</FullPage>
	);
};
