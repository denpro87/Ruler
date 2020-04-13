import * as React from 'react';
import { IconButton } from 'components';
import { makeStyles } from '@material-ui/styles';
import { styles } from './Home.types';
import { useState } from 'react';
import MapGL from 'react-map-gl';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const useStyle = makeStyles(styles);

export const Home: React.FunctionComponent = () => {
	const classes = useStyle();
	const [viewport, setViewport] = useState({
		latitude: 37.8,
		longitude: -122.4,
		zoom: 14,
		bearing: 0,
		pitch: 0
	});

	return (
		<MapGL
			{...viewport}
			width="100vw"
			height="100vh"
			mapStyle="mapbox://styles/mapbox/streets-v11"
			onViewportChange={setViewport}
			mapboxApiAccessToken={MAPBOX_TOKEN}
		>
			<IconButton className={classes.reportIcon} iconProps={{ iconName: 'report', primaryColor: 'black', secondaryColor: 'red' }} />
			<IconButton className={classes.zonesIcon} iconProps={{ iconName: 'zones', primaryColor: 'black', secondaryColor: 'red' }} />
			<IconButton className={classes.vehicleIcon} iconProps={{ iconName: 'vehicle', primaryColor: 'black', secondaryColor: 'red' }} />
			<IconButton className={classes.findMeIcon} iconProps={{ iconName: 'find-me', primaryColor: 'black', secondaryColor: 'red' }} />
		</MapGL>
	);
};
