import { Footer, Image, Page, Text } from 'components';
import { INewsDetailProps } from './NewsDetail.types';
import { Paper, makeStyles } from '@material-ui/core';
import { styles } from './NewsDetail.styles';
import React from 'react';
import vehicle from './images/Vehicle.png';

const useStyles = makeStyles(styles);

export const NewsDetail: React.FunctionComponent<INewsDetailProps> = props => {
	const classes = useStyles();

	return (
		<Page className={classes.detailContainer} headerLink="Open in browser">
			<Paper elevation={0} className={classes.detailContainer}>
				<Image src={vehicle} alt="vehicleImage" className={classes.vehicleImage} rounded fullWidth />
				<div className={classes.title}>
					<Text className={classes.titleTxt}>Id cursus metus aliquam eleifen min nulla?</Text>
				</div>
				<Text className={classes.descriptionText}>
					To start your scooter ride, place one foot firmly on the baseboard and use your other foot to push off against the ground a few
					times. Once you’ve gained some speed, press on the throttle near your right thumb to accelerate. Familiarize yourself with the
					throttle and squeeze the hand brake to slow down when needed.
				</Text>
			</Paper>
			<Footer leftIcon="instagram" leftText="Instagram" rightIcon="ride-history" rightText="Nov 24" />
		</Page>
	);
};
