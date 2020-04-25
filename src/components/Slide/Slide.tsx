import { ISlideProps } from './Slide.types';
import { IonSlide } from '@ionic/react';
import { Paragraph, Title } from 'components/Text';
import { makeStyles } from '@material-ui/styles';
import { styles } from './Slide.styles';
import { useIntl } from 'react-intl';
import React from 'react';

const useStyle = makeStyles(styles);

export const Slide: React.FunctionComponent<ISlideProps> = props => {
	const classes = useStyle();
	const { formatMessage } = useIntl();
	const { slide } = props;

	return (
		<IonSlide className={classes.slide}>
			<div className={classes.slideContainer}>
				<img style={slide.style} src={slide.image} alt={slide.title} />
				<div className={classes.slideContent}>
					<Title className={classes.title}>{formatMessage({ id: slide.title })}</Title>
					<Paragraph className={classes.description}>{formatMessage({ id: slide.description })}</Paragraph>
				</div>
			</div>
		</IonSlide>
	);
};
