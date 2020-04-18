import { CustomIonSlide } from 'components/CustomIonSlide';
import { FullPage, GreenButton } from 'components';
import { IonSlides } from '@ionic/react';
import { makeStyles } from '@material-ui/styles';
import { slides } from './SlideData';
import { styles } from './HowToRide.styles';
import React from 'react';

const slideOpts = {
	initialSlide: 0,
	speed: 1000
};

const useStyles = makeStyles(styles);

export const HowToRide: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<FullPage canGoBack pageHeaderClassName={classes.pageHeader}>
			<div className={classes.pageContent}>
				<div>
					<IonSlides pager options={slideOpts}>
						{slides.map((slide, index) => (
							<CustomIonSlide key={index} slide={slide} />
						))}
					</IonSlides>
					<div className={classes.footer}>
						<div className={classes.footerContainer}>
							<GreenButton compact iconName="well-done-checked" className={classes.skipButton}>
								Got it
							</GreenButton>
						</div>
					</div>
				</div>
			</div>
		</FullPage>
	);
};
