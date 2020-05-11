import { BottomSheet, GreenButton, LightGreenButton, Page, Text } from 'components';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { MyRide } from './components';
import { Stack } from '@fluentui/react';
import { myRidesHistoryData } from './MyRides.data';
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
	const [showReport, setShowReport] = React.useState(false);
	React.useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	});

	const handleReportBottomSheetChange = (isOpen: boolean) => {
		setShowReport(isOpen);
	};

	return (
		<Page canGoBack title={loading ? '' : formatMessage({ id: 'my_rides.title' })} titleSize="large">
			<Box
				className={clsx(
					{ [classes.backgroundContainer]: true },
					{ [classes.loadingBackgroundArea]: loading },
					{ [classes.backgroundArea]: !loading && myRidesHistoryData.length === 0 }
				)}
			>
				<img src={loading ? loadingBackground : Background} alt="background" />
			</Box>
			<Box className={classes.content}>
				<Stack>
					<Stack.Item>
						<Text className={classes.descriptionText} block>
							{loading && formatMessage({ id: 'my_rides.text.loading' })}
							{!loading && myRidesHistoryData.length === 0 && formatMessage({ id: 'my_rides.text.description' })}
						</Text>
						{!loading && myRidesHistoryData.length === 0 && (
							<GreenButton className={classes.toHomeButton} onClick={(): void => history.push('/home')}>
								{formatMessage({ id: 'button.to_home' })}
							</GreenButton>
						)}
					</Stack.Item>
				</Stack>
			</Box>
			{!loading && myRidesHistoryData.length > 0 && (
				<Box className={classes.myRidesHistoryContainer}>
					{myRidesHistoryData.map((myRideHistoryData, index) => {
						return <MyRide key={index} {...myRideHistoryData} onReportIconButtonClick={(): void => setShowReport(true)} />;
					})}
				</Box>
			)}
			<BottomSheet
				onCloseButtonClick={(): void => setShowReport(false)}
				title={formatMessage({ id: 'get_help.add_report_sheet.title' })}
				open={showReport}
				onBottomSheetChange={handleReportBottomSheetChange}
			>
				<Typography className={classes.sheetText}>{formatMessage({ id: 'my_rides.add_report_sheet.description' })}</Typography>
				<LightGreenButton
					className={classes.sheetButton}
					iconName="badly-parked-vehicle"
					onClick={(): void => history.push('/my-rides/badly-parked-vehicle')}
				>
					{formatMessage({ id: 'home.add_report_sheet.button.badly_parked_vehicle' })}
				</LightGreenButton>
				<LightGreenButton
					className={classes.sheetButton}
					iconName="damaged-vehicle"
					onClick={(): void => history.push('/my-rides/damaged-vehicle')}
				>
					{formatMessage({ id: 'get_help.add_report_sheet.button.damaged_vehicle' })}
				</LightGreenButton>
				<LightGreenButton className={classes.sheetButton} iconName="support">
					{formatMessage({ id: 'get_help.add_report_sheet.button.support' })}
				</LightGreenButton>
			</BottomSheet>
		</Page>
	);
};
