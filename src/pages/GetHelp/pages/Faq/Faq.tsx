import { List, ListItem, ListItemText, Typography, makeStyles } from '@material-ui/core';
import { Page, SearchBox } from 'components';
import { Link as RouterLink } from 'react-router-dom';
import { styles } from './Faq.styles';

import React from 'react';

const useStyles = makeStyles(styles);
const defaultQuestions = [
	{
		title: 'Finding a bike or vehicle',
		href: '/get-help/faq-finding',
		type: 'basics'
	},
	{
		title: 'How canI unlock a bike/vehicle?',
		href: '/get-help/faq-unlock',
		type: 'basics'
	},
	{
		title: 'I have unlocked the scooter. How can I start the ride?',
		href: '/get-help/faq-start',
		type: 'basics'
	},
	{
		title: 'The trip is finished. How do I park?',
		href: '/get-help/faq-park',
		type: 'basics'
	},
	{
		title: 'I am done with the parking. How do I lock?',
		href: '/get-help/faq-lock',
		type: 'basics'
	},
	{
		title: 'So what are the ride zones?',
		href: '/get-help/faq-zones',
		type: 'basics'
	},
	{
		title: 'How do I pause a trip?',
		href: '/get-help/faq-pause',
		type: 'basics'
	},
	{
		title: 'Tortor pretium viverra suspendisse?',
		href: '/get-help/faq-pretium',
		type: 'pricing'
	}
];

const types = [
	{
		type: 'basics',
		title: 'Rider basics'
	},
	{
		type: 'pricing',
		title: 'Pricing & payment'
	}
];

export const Faq: React.FunctionComponent = () => {
	const classes = useStyles();
	const [questions, setQuestions] = React.useState(defaultQuestions);

	const handleSearchBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const keywords = event.target.value.toLowerCase();
		const filteredQuestions = defaultQuestions.filter(item => item.title.toLowerCase().includes(keywords.toLowerCase()));
		setQuestions(filteredQuestions);
	};

	return (
		<Page title="FAQ" titleSize="medium">
			<SearchBox className={classes.searchBox} onChange={handleSearchBoxChange} />
			{types.map((type, index) => {
				const typeQuestions = questions.filter(item => item.type === type.type);

				return (
					<div key={`${index}-type`}>
						{typeQuestions.length > 0 && <Typography className={classes.subHeader}>{type.title}</Typography>}
						<List className={classes.list}>
							{typeQuestions.map((question, index) => (
								<ListItem key={index} className={classes.listItem} component={RouterLink} to={question.href}>
									<ListItemText primary={question.title} classes={{ primary: classes.text }} />
								</ListItem>
							))}
						</List>
					</div>
				);
			})}
		</Page>
	);
};
