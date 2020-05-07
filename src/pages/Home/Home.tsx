import { BottomSheet, Dialog, FullPage, GreenButton, Icon, IconButton, Menu, Text } from 'components';
import { Box } from '@material-ui/core';
import { IHomeProps } from './Home.types';
import { IonImg } from '@ionic/react';
import { makeStyles } from '@material-ui/styles';
import { mapViewer, styles } from './Home.styles';
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
	const [state, setState] = React.useState(false);
	React.useEffect(() => {
		const params: any = props.location.state;
		const state = params && params.state ? params.state : null;

		if (state) setState(state);
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

	const handleBottomSheetChange = (isOpen: boolean) => {
		setState(isOpen);
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
				<IconButton className={classes.reportButton} iconProps={{ iconName: 'report', primaryColor: 'black', secondaryColor: 'red' }} />
				<IconButton className={classes.zonesButton} iconName="zones" colorType="black" />
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
				open={state}
				onBottomSheetChange={handleBottomSheetChange}
			>
				<GreenButton className={classes.shareButton} iconName="share">
					{formatMessage({ id: 'home.invite_friends_sheet.button.text' })}
				</GreenButton>
			</BottomSheet>
		</FullPage>
	);
};
