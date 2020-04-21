import { INewsItemProps } from './NewsItem.types';
import { Image, Text } from 'components';
import { ListItem, ListItemText, makeStyles } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { styles } from './NewsItem.styles';
import React from 'react';
const useStyles = makeStyles(styles);

export const NewsItem: React.FunctionComponent<INewsItemProps> = props => {
	const classes = useStyles();

	return (
		<ListItem className={classes.articleListItem} button component={RouterLink} to={`/news/${props.socialName}`}>
			<Image className={classes.imageBox} src={props.imageUrl} alt={props.altName} rounded width={70} />
			<ListItemText>
				<Text className={classes.articleDescription} block>
					<div className={classes.platformText}>{props.socialName}</div>
					<div className={classes.articleTime}>{props.timeHistory}</div>
				</Text>
				<Text className={classes.articleTitle} block>
					{props.title}
				</Text>
				<Text className={classes.articleText} block>
					{props.description}
				</Text>
			</ListItemText>
		</ListItem>
	);
};
