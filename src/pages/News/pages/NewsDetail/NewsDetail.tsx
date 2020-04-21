import { Footer, Page, Text } from 'components';
import { INewsDetailProps } from './NewsDetail.types';

import { Paper, makeStyles } from '@material-ui/core';
import { styles } from './NewsDetail.styles';
import React from 'react';
import vehicle from './images/Vehicle.png';
const useStyles = makeStyles(styles);

export const NewsDetail: React.FunctionComponent<INewsDetailProps> = props => {
	const classes = useStyles();
	console.log('333', props);

	return (
		<Page className={classes.detailContainer} headerText="Open in browser">
			<Paper elevation={0} className={classes.detailContainer}>
				<img src={vehicle} alt="vehicleImage" className={classes.vehicleImage}></img>
				<div className={classes.title}>
					<Text className={classes.titleTxt}>Id cursus metus aliquam eleifen min nulla?</Text>
				</div>
				<Text className={classes.descriptionTxt}>
					To start your scooter ride, place one foot firmly on the baseboard and use your other foot to push off against the ground a few
					times. Once you’ve gained some speed, press on the throttle near your right thumb to accelerate. Familiarize yourself with the
					throttle and squeeze the hand brake to slow down when needed.
				</Text>
			</Paper>
			<Footer leftIcon="instagram" leftText="Instagram" leftColor="#ffffff" rightIcon="ride-history" rightText="Nov 24" />
		</Page>
	);
};
