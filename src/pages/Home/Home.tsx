import * as React from 'react';
import { useState } from 'react';
import MapGL from 'react-map-gl';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export const Home: React.FunctionComponent = () => {
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
		/>
	);
};
