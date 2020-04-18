import { ICustomIonSlide, ICustomSlide } from './CustomIonSlide.types';
import { IonSlide } from '@ionic/react';
import { Paragraph, Title } from 'components/Text';
import { makeStyles } from '@material-ui/styles';
import { styles } from './CustomIonSlide.styles';
import React from 'react';

const useStyle = makeStyles(styles);

export const CustomIonSlide: React.FunctionComponent<ICustomIonSlide> = props => {
	const classes = useStyle();
	const { slide } = props;

	return (
		<IonSlide className={classes.slide}>
			<div className={classes.slideContainer}>
				<img style={slide.style} src={slide.image} alt={slide.title} />
				<div className={classes.slideContent}>
					<Title className={classes.title}>{slide.title}</Title>
					<Paragraph className={classes.description}>{slide.description}</Paragraph>
				</div>
			</div>
		</IonSlide>
	);
};
