import { List, ListItemText } from '@material-ui/core';
import { Page, Text } from 'components';
import { makeStyles } from '@material-ui/styles';
import { styles } from './News.styles';
import React from 'react';

const useStyles = makeStyles(styles);

export const News: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<Page title="News" titleSize="large">
			<List className={classes.articleList}>
				<ListItemText>
					<Text className={classes.articleDescription} block>
						<div className={classes.platformText}>Facebook</div>
						<div className={classes.articleTime}>2h ago</div>
					</Text>
					<Text className={classes.articleTitle} block>
						I have unlocked the scooter. How can I start the ride?
					</Text>
					<Text className={classes.articleText} block>
						To start your scooter ride, place one foot firmly on the baseboard and use your other foot to push off against the ground a few
						times....
					</Text>
				</ListItemText>
			</List>
		</Page>
	);
};
