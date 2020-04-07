import { Box, makeStyles } from '@material-ui/core';
import { IonContent, IonIcon, IonImg, IonRouterLink } from '@ionic/react';
import { Page, Styling } from 'components';
import { getDiffDate, getSocialIcon } from './helpers';
import { news as newsList } from './news-data.json';
import { styles } from './NewsDetail.styles';
import React, { Component } from 'react';

const useStyles = makeStyles(styles);

export class NewsDetail extends Component {
	state: any = {};

	newsId: any = {};

	constructor(props: any) {
		super(props);
		this.state = {
			news: newsList[props.match.params.newsId - 1]
		};
	}

	render() {
		const { news } = this.state;

		return (
			<Styling useStyles={useStyles}>
				{classes => (
					<Page>
						<Box className={classes.wrapper1}>
							<IonRouterLink className={classes.openBrowser} href="https://instagram.com">
								Open in browser
							</IonRouterLink>
						</Box>

						<Box className={classes.imageContainer}>
							<IonImg src={news.image} className={classes.image}></IonImg>
						</Box>
						<Box className={classes.title}>{news.title}</Box>
						<Box className={classes.description}>{news.description}</Box>

						<Box className={classes.footer}>
							<Box className={classes.social}>
								<IonIcon icon={getSocialIcon(news.social)} className={classes.icon}></IonIcon>
								{news.social}
							</Box>
							<Box className={classes.date}>
								{/* <ScheduleIcon className={classes.schedulIcon} /> */}
								{getDiffDate(news.date)}
							</Box>
						</Box>
					</Page>
				)}
			</Styling>
		);
	}
}
