import { AreasListItem } from './components';
import { BottomSheet, Dialog, FullPage, GreenButton, Icon, IconButton, LightGreenButton, Menu, Text } from 'components';
import { Box, List, Typography } from '@material-ui/core';
import { IHomeProps } from './Home.types';
import { IonImg } from '@ionic/react';
import { areasListItems } from './Home.data';
import { makeStyles } from '@material-ui/styles';
import { mapViewer, styles } from './Home.styles';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import Fab from '@material-ui/core/Fab';
import MapGL, { ViewState } from 'react-map-gl';
import React from 'react';
import clsx from 'clsx';
import rateImage from './images/rate.svg';
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
const useStyles = makeStyles(styles);

export const Home: React.FunctionComponent<IHomeProps> = props => {
	const classes = useStyles();
	const history = useHistory();
	const { formatMessage } = useIntl();
	const [viewport, setViewport] = React.useState<ViewState>({
		latitude: 37.8,
		longitude: -122.4,
		zoom: 14,
		bearing: 0,
		pitch: 0
	});
	const [vehicleSelectionExpanded, setVehicleSelectionExpanded] = React.useState(false);
	const [rateRulerModal, setRateRulerModal] = React.useState(true);
	const [open, setOpen] = React.useState(false);
	const [showInviteFriends, setShowInviteFriends] = React.useState(false);
	const [showReport, setShowReport] = React.useState(false);
	const [showAreas, setShowAreas] = React.useState(false);
	React.useEffect(() => {
		const params: any = props.location.state;
		const state = params && params.state ? params.state : null;

		if (state) setShowInviteFriends(state);
	}, [props.location.state]);

	const handleDialogClose = (): void => {
		setRateRulerModal(false);
	};

	const handleDrawerClick = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent): void => {
		if (
			event &&
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
		) {
			return;
		}
		setOpen(open);
	};

	const handleReportBottomSheetChange = (isOpen: boolean) => {
		setShowReport(isOpen);
	};

	const handleAreasBottomSheetChange = (isOpen: boolean) => {
		setShowAreas(isOpen);
	};

	const handleInviteFriendsBottomSheetChange = (isOpen: boolean) => {
		setShowInviteFriends(isOpen);
	};

	const handleBadlyClick = () => {
		setShowReport(false);
		history.push('/my-rides/badly-parked-vehicle');
	};

	const handleDamagedClick = () => {
		setShowReport(false);
		history.push('/my-rides/damaged-vehicle');
	};

	const handleContactClick = () => {
		setShowReport(false);
		history.push('/my-rides/report');
	};

	return (
		<FullPage>
			<MapGL
				{...viewport}
				width="100%"
				height="100%"
				style={mapViewer}
				mapStyle="mapbox://styles/mapbox/streets-v11"
				onViewportChange={setViewport}
				mapboxApiAccessToken={MAPBOX_TOKEN}
			>
				<IconButton
					className={classes.reportButton}
					iconProps={{ iconName: 'report', primaryColor: 'black', secondaryColor: 'red' }}
					onClick={(): void => setShowReport(true)}
				/>
				<IconButton className={classes.zonesButton} iconName="zones" colorType="black" onClick={(): void => setShowAreas(true)} />
				<Box className={classes.vehicleButtonGroup}>
					{vehicleSelectionExpanded ? (
						<Box className={classes.vehicleButtonGroupWrapper}>
							<IconButton
								noShadow
								label={formatMessage({ id: 'home.text.all' })}
								iconName="vehicle"
								colorType="black"
								className={classes.firstIconButton}
							/>
							<IconButton
								noShadow
								label={formatMessage({ id: 'home.text.car' })}
								iconName="car"
								colorType="black"
								className={classes.midIconButton}
							/>
							<IconButton
								noShadow
								label={formatMessage({ id: 'home.text.bike' })}
								iconName="bike"
								colorType="black"
								className={classes.midIconButton}
							/>
							<IconButton
								noShadow
								label={formatMessage({ id: 'home.text.scooter' })}
								iconName="scooter"
								colorType="black"
								className={classes.midIconButton}
							/>
							<IconButton
								iconName="close"
								colorType="black"
								className={classes.lastIconButton}
								onClick={(): void => setVehicleSelectionExpanded(false)}
							/>
						</Box>
					) : (
						<IconButton
							iconName="vehicle"
							className={classes.vehicleIconButton}
							colorType="black"
							onClick={(): void => setVehicleSelectionExpanded(true)}
						/>
					)}
				</Box>
				<Text className={clsx(classes.iconButtonText, classes.positionVehicleText)}>{formatMessage({ id: 'home.text.vehicle' })}</Text>
				<IconButton className={classes.findMeButton} iconName="find-me" colorType="black" />
				<Text className={clsx(classes.iconButtonText, classes.positionLocationText)}>{formatMessage({ id: 'home.text.location' })}</Text>
				<Box className={classes.homeButtons}>
					<IconButton className={classes.menuButton} iconName="menu" colorType="black" noShadow onClick={handleDrawerClick(true)} />
					<Fab aria-label="add" className={classes.qrButton}>
						<Icon colorType="black" iconName="qr" primaryColor="white" secondaryColor="white" />
					</Fab>
					<IconButton className={classes.filterButton} iconName="filter" colorType="black" noShadow />
				</Box>
				<Box className={classes.homeButtonsText}>
					<Text className={classes.iconButtonText}>{formatMessage({ id: 'home.text.menu' })}</Text>
					<Text className={classes.iconButtonText}>{formatMessage({ id: 'home.text.filter' })}</Text>
				</Box>
			</MapGL>
			<Dialog
				title={formatMessage({ id: 'home.rate_ruler.dialog.title' })}
				open={rateRulerModal}
				hasClose
				illustrationName="rate"
				onClose={handleDialogClose}
				aria-labelledby="form-dialog-title"
			>
				<Text className={classes.dialogContentText}>{formatMessage({ id: 'home.rate_ruler.dialog.description' })}</Text>
				<Box className={classes.rateImageWrapper}>
					<IonImg className={classes.rateImage} src={rateImage} />
				</Box>
			</Dialog>
			<Menu open={open} onOpen={handleDrawerClick(true)} onClose={handleDrawerClick(false)} />
			<BottomSheet
				title={formatMessage({ id: 'home.invite_friends_sheet.title' })}
				description={formatMessage({ id: 'home.invite_friends_sheet.description' })}
				open={showInviteFriends}
				onBottomSheetChange={handleInviteFriendsBottomSheetChange}
			>
				<GreenButton className={classes.shareButton} iconName="share">
					{formatMessage({ id: 'home.invite_friends_sheet.button.text' })}
				</GreenButton>
			</BottomSheet>
			<BottomSheet
				hasCloseButton
				onCloseButtonClick={(): void => setShowReport(false)}
				title={formatMessage({ id: 'get_help.add_report_sheet.title' })}
				open={showReport}
				onBottomSheetChange={handleReportBottomSheetChange}
			>
				<Typography className={classes.sheetText}>{formatMessage({ id: 'get_help.add_report_sheet.description' })}</Typography>
				<LightGreenButton className={classes.sheetButton} iconName="badly-parked-vehicle" onClick={handleBadlyClick}>
					{formatMessage({ id: 'home.add_report_sheet.button.badly_parked_vehicle' })}
				</LightGreenButton>
				<LightGreenButton className={classes.sheetButton} iconName="damaged-vehicle" onClick={handleDamagedClick}>
					{formatMessage({ id: 'get_help.add_report_sheet.button.damaged_vehicle' })}
				</LightGreenButton>
				<LightGreenButton className={classes.sheetButton} iconName="support" onClick={handleContactClick}>
					{formatMessage({ id: 'get_help.add_report_sheet.button.support' })}
				</LightGreenButton>
			</BottomSheet>
			<BottomSheet
				hasCloseButton
				onCloseButtonClick={(): void => setShowAreas(false)}
				title={formatMessage({ id: 'home.areas_sheet.title' })}
				open={showAreas}
				onBottomSheetChange={handleAreasBottomSheetChange}
			>
				<List className={classes.areasList}>
					{areasListItems.map((listItem, index) => {
						return <AreasListItem key={index} {...listItem} />;
					})}
				</List>
			</BottomSheet>
		</FullPage>
	);
};
