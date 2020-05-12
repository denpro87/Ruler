import { AreasListItem } from './components';
import {
	BottomSheet,
	Button,
	Dialog,
	Divider,
	FullPage,
	GreenButton,
	Icon,
	IconButton,
	LightGreenButton,
	Menu,
	SwitchListItem,
	Text
} from 'components';
import { Box, List, Slider, Typography } from '@material-ui/core';
import { IHomeProps } from './Home.types';
import { IonImg } from '@ionic/react';
import { areasListItems, damagedVehicleTypes } from './Home.data';
import { makeStyles } from '@material-ui/styles';
import { mapViewer, styles } from './Home.styles';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import Fab from '@material-ui/core/Fab';
import MapGL, { ViewState } from 'react-map-gl';
import React from 'react';
import bird from './images/bird.png';
import circ from './images/circ.png';
import clsx from 'clsx';
import lime from './images/lime.png';
import rateImage from './images/rate.svg';
import spin from './images/spin.png';
import tier from './images/tier.png';
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
const useStyles = makeStyles(styles);

export const Home: React.FunctionComponent<IHomeProps> = props => {
	const classes = useStyles();
	const history = useHistory();
	const { formatMessage } = useIntl();
	const initialState = {
		selectAll: false,
		lime: true,
		bird: false,
		spin: true,
		circ: false,
		tier: false,
		electrical: false,
		internalCombustion: false
	};
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
	const [showFilter, setShowFilter] = React.useState(false);
	const [buttonLabel, setButtonLabel] = React.useState('Car');
	const [switchState, setSwitchState] = React.useState(initialState);
	const [batteryLevel, setBatteryLevel] = React.useState<number[]>([35, 100]);
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

	const handleFilterBottomSheetChange = (isOpen: boolean) => {
		setShowFilter(isOpen);
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

	const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.persist();

		if (event.target.name === 'selectAll') {
			if (event.target.checked) {
				const temp = {
					selectAll: true,
					lime: true,
					bird: true,
					spin: true,
					circ: true,
					tier: true,
					electrical: true,
					internalCombustion: true
				};
				setSwitchState(temp);
			} else {
				const temp = {
					selectAll: false,
					lime: false,
					bird: false,
					spin: false,
					circ: false,
					tier: false,
					electrical: false,
					internalCombustion: false
				};
				setSwitchState(temp);
			}
		} else {
			setSwitchState(prevState => ({ ...prevState, [event.target.name]: event.target.checked }));
		}
	};

	const handleBatteryLevelChange = (event: any, newValue: number | number[]) => {
		setBatteryLevel(newValue as number[]);
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
					<IconButton
						className={classes.filterButton}
						iconName="filter"
						colorType="black"
						noShadow
						onClick={(): void => setShowFilter(true)}
					/>
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
			<BottomSheet
				outDecorator
				onCloseButtonClick={(): void => setShowFilter(false)}
				open={showFilter}
				onBottomSheetChange={handleFilterBottomSheetChange}
			>
				<Box className={classes.buttonGroupWrapper}>
					{damagedVehicleTypes.map((damagedVehicleType, index) => {
						return (
							<Button
								className={clsx(
									{ [classes.button]: true },
									{ [classes.activeBackground]: buttonLabel === formatMessage({ id: damagedVehicleType.label }) },
									{ [classes.inActiveBackground]: buttonLabel !== formatMessage({ id: damagedVehicleType.label }) }
								)}
								key={index}
								onClick={(): void => setButtonLabel(formatMessage({ id: damagedVehicleType.label }))}
							>
								<Icon iconName={damagedVehicleType.iconName} colorType="black" />
								<Text className={classes.smallText}>{formatMessage({ id: damagedVehicleType.label })}</Text>
							</Button>
						);
					})}
				</Box>
				<Text className={classes.smallText}>{formatMessage({ id: 'home.filter_sheet.text.companies' })}</Text>
				<List className={classes.filterList}>
					<SwitchListItem
						title={formatMessage({ id: 'home.text.all' })}
						iconName="well-done-checked"
						name="selectAll"
						checked={switchState.selectAll}
						onChange={handleStateChange}
					/>
					<Divider />
					<SwitchListItem
						title={formatMessage({ id: 'service_providers.lime.name' })}
						imageUrl={lime}
						name="lime"
						checked={switchState.lime}
						onChange={handleStateChange}
					/>
					<Divider />
					<SwitchListItem
						title={formatMessage({ id: 'service_providers.bird.name' })}
						imageUrl={bird}
						name="bird"
						checked={switchState.bird}
						onChange={handleStateChange}
					/>
					<Divider />
					<SwitchListItem
						title={formatMessage({ id: 'service_providers.spin.name' })}
						imageUrl={spin}
						name="spin"
						checked={switchState.spin}
						onChange={handleStateChange}
					/>
					<Divider />
					<SwitchListItem
						title={formatMessage({ id: 'service_providers.circ.name' })}
						imageUrl={circ}
						name="circ"
						checked={switchState.circ}
						onChange={handleStateChange}
					/>
					<Divider />
					<SwitchListItem
						title={formatMessage({ id: 'service_providers.tier.name' })}
						imageUrl={tier}
						name="tier"
						checked={switchState.tier}
						onChange={handleStateChange}
					/>
					<Box className={classes.batteryLevelText}>
						<Text className={classes.smallText}>{formatMessage({ id: 'home.filter_sheet.text.battery_level' })}</Text>
					</Box>
					<Slider
						value={batteryLevel}
						onChange={handleBatteryLevelChange}
						aria-labelledby="battery-level-slider"
						ThumbComponent={(props: any) => (
							<span {...props}>
								<Icon iconName="buble" colorType="green" />
							</span>
						)}
						classes={{ root: classes.sliderContainer, rail: classes.railPart, track: classes.trackPart }}
					/>
					<Box className={classes.percentageTextWrapper}>
						<Text className={classes.percentageText}>{`${batteryLevel[0]}%`}</Text>
						<Text className={classes.percentageText}>{`${batteryLevel[1]}%`}</Text>
					</Box>
					<Box className={classes.engineTypeText}>
						<Text className={classes.smallText}>{formatMessage({ id: 'home.filter_sheet.text.engine_type' })}</Text>
					</Box>
					<SwitchListItem
						title={formatMessage({ id: 'home.filter_sheet.text.electrical' })}
						name="electrical"
						checked={switchState.electrical}
						onChange={handleStateChange}
					/>
					<Divider />
					<SwitchListItem
						title={formatMessage({ id: 'home.filter_sheet.text.internal_combustion' })}
						name="internalCombustion"
						checked={switchState.internalCombustion}
						onChange={handleStateChange}
					/>
				</List>
				<Button iconName="reset" compact className={classes.resetButton} onClick={(): void => setSwitchState(initialState)}>
					{formatMessage({ id: 'button.reset' })}
				</Button>
			</BottomSheet>
		</FullPage>
	);
};
