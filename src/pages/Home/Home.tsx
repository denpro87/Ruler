import { Box } from '@material-ui/core';
import { FullPage, Icon, IconButton } from 'components';
import { makeStyles } from '@material-ui/styles';
import { mapViewer, styles } from './Home.styles';
import Fab from '@material-ui/core/Fab';
import MapGL, { ViewState } from 'react-map-gl';
import React, { useState } from 'react';
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const useStyles = makeStyles(styles);

export const Home: React.FunctionComponent = () => {
	const classes = useStyles();
	const [viewport, setViewport] = useState<ViewState>({
		latitude: 37.8,
		longitude: -122.4,
		zoom: 14,
		bearing: 0,
		pitch: 0
	});
	const [vehicleSelectionExpanded, setVehicleSelectionExpanded] = useState(false);

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
						<Box display="flex" flexDirection="column" bgcolor="white" borderRadius={15}>
							<IconButton noShadow label="All" key="vehicle" iconName="vehicle" colorType="black" />
							<IconButton noShadow label="Car" key="car" iconName="car" colorType="black" />
							<IconButton noShadow label="Bike" key="bike" iconName="bike" colorType="black" />
							<IconButton noShadow label="Scooter" key="scooter" iconName="scooter" colorType="black" />
							<IconButton key="close" iconName="close" colorType="black" onClick={(): void => setVehicleSelectionExpanded(false)} />
						</Box>
					) : (
						<IconButton iconName="vehicle" colorType="black" onClick={(): void => setVehicleSelectionExpanded(true)} />
					)}
				</Box>
				<IconButton className={classes.findMeButton} iconName="find-me" colorType="black" />
				<div className={classes.homeButtons}>
					<IconButton className={classes.menuButton} iconName="menu" colorType="black" noShadow />
					<Fab aria-label="add" className={classes.qrButton}>
						<Icon colorType="black" iconName="qr" primaryColor="white" secondaryColor="white" />
					</Fab>
					<IconButton className={classes.filterButton} iconName="filter" colorType="black" noShadow />
				</div>
			</MapGL>
		</FullPage>
	);
};
