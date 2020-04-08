import './NewsItem.css';
import { Box, makeStyles } from '@material-ui/core';
import { INewsItemProps } from './NewsItem.types';
import { IonImg, IonItem } from '@ionic/react';
import { getDiffDate, trimeString } from './helpers';
import { styles } from './NewsItem.styles';
import React from 'react';

const useStyles = makeStyles(styles);

export const NewsItem: React.FunctionComponent<INewsItemProps> = ({ news }) => {
	const classes = useStyles();

	return (
		<IonItem routerLink={`/news/detail/${news.id}`} lines="none">
			<Box className={classes.newsItem}>
				<Box className={classes.item1}>
					<IonImg className={classes.newsImage} src={news.image} alt={'News Image'}></IonImg>
				</Box>
				<Box className={classes.item2}>{news.social}</Box>
				<Box className={classes.item3}>{getDiffDate(news.date)}</Box>
				<Box className={classes.item4}>{news.title}</Box>
				<Box className={classes.item5}>{trimeString(news.description, 120)}</Box>
			</Box>
		</IonItem>
	);
};
