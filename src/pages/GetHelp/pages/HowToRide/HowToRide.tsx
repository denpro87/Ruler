import { Box, makeStyles } from '@material-ui/core';
import { FullPage, GreenButton } from 'components';
import { IonSlides } from '@ionic/react';
import { Slide } from 'components/Slide';
import { setFlagsFromString } from 'v8';
import { slides } from './HowToRide.data';
import { styles } from './HowToRide.styles';
import React from 'react';
import clsx from 'clsx';

const slideOpts = {
	initialSlide: 0,
	speed: 1000
};

const useStyles = makeStyles(styles);

export const HowToRide: React.FunctionComponent = () => {
	const classes = useStyles();
	const slidesRef = React.useRef<HTMLIonSlidesElement>(null);
	const [activeIndex, setActiveIndex] = React.useState(0);
	const [flag, setFlag] = React.useState(false);

	const handleSlideChange = (event: any) => {
		setActiveIndex(event.target.swiper.activeIndex);
	};

	const handleNextButtonClick = (event: any) => {
		slidesRef.current?.slideNext();
		// slidesRef.current?.slidePrev();
	};

	const handlePrevButtonClick = (event: any) => {
		slidesRef.current?.slidePrev();
	};
	React.useEffect(() => {
		if (activeIndex === 0) {
			setFlag(false);
		} else if (activeIndex === 4) {
			setFlag(true);
		}
	}, [activeIndex]);

	return (
		<FullPage canGoBack pageHeaderClassName={classes.pageHeader}>
			<div className={classes.pageContent}>
				<div>
					<IonSlides options={slideOpts} ref={slidesRef} onIonSlideWillChange={handleSlideChange}>
						{slides.map((slide, index) => (
							<Slide key={index} slide={slide} />
						))}
					</IonSlides>
				</div>
				<div className={classes.footer}>
					<Box className={classes.stateWrapper}>
						{[0, 1, 2, 3, 4].map(index => (
							<span key={index} className={clsx({ [classes.stateItem]: true }, { [classes.currentStateItem]: index === activeIndex })} />
						))}
					</Box>
					<GreenButton
						compact
						iconName="well-done-checked"
						className={classes.skipButton}
						onClick={flag ? handlePrevButtonClick : handleNextButtonClick}
					>
						Got it
					</GreenButton>
				</div>
			</div>
		</FullPage>
	);
};
