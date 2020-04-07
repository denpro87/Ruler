import { Box, List, Typography, makeStyles } from '@material-ui/core';
import { IonList } from '@ionic/react';
import { NewsItem } from 'components/NewsItem';
import { Page, Styling } from 'components';
import { news as newsList } from './news-data.json';
import { styles } from './News.styles';
import React, { Component } from 'react';

const useStyles = makeStyles(styles);

const INITIAL_STATE = {};

export class News extends Component {
	state: any = {};

	constructor(props: any) {
		super(props);
		this.state = { ...INITIAL_STATE };
	}

	render() {
		const news = newsList;

		return (
			<Styling useStyles={useStyles}>
				{classes => (
					<Page>
						<Box className={classes.heading}>
							<Typography variant="h4">News</Typography>
						</Box>
						<Box className={classes.newsContainer}>
							<List className={classes.newsList}>
								{news.map(item => (
									<IonList key={item.id} className={classes.newItem}>
										<NewsItem news={item} />
									</IonList>
								))}
							</List>
						</Box>
					</Page>
				)}
			</Styling>
		);
	}
}

export default News;
