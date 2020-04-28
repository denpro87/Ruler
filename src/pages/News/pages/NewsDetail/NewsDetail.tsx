import { Footer, Image, Page, Text } from 'components';
import { INewsDetailProps } from './NewsDetail.types';
import { Paper, makeStyles } from '@material-ui/core';
import { styles } from './NewsDetail.styles';
import { useIntl } from 'react-intl';
import React from 'react';

const useStyles = makeStyles(styles);

const sampleNews = {
	imageUrl: require('./images/Vehicle.png'),
	altName: 'new1',
	title: 'Id cursus metus aliquam eleifen min nulla?',
	description: `To start your scooter ride, place one foot firmly on the baseboard and use your other foot to push off against the ground a few
            times. Once you’ve gained some speed, press on the throttle near your right thumb to accelerate. Familiarize yourself with the
            throttle and squeeze the hand brake to slow down when needed.`,
	timeHistory: 'Nov 24'
};

export const NewsDetail: React.FunctionComponent<INewsDetailProps> = props => {
	const classes = useStyles();
	const { formatMessage } = useIntl();

	return (
		<Page className={classes.detailContainer} headerLink={formatMessage({ id: 'news-detail.text.open-in-browser' })}>
			<Paper elevation={0} className={classes.detailContainer}>
				<Image src={sampleNews.imageUrl} alt="vehicleImage" className={classes.vehicleImage} rounded fullWidth />
				<div className={classes.title}>
					<Text className={classes.titleTxt}>{sampleNews.title}</Text>
				</div>
				<Text className={classes.descriptionText}>{sampleNews.description}</Text>
			</Paper>
			<Footer leftIcon="instagram" leftText="Instagram" rightIcon="ride-history" rightText={sampleNews.timeHistory} />
		</Page>
	);
};
