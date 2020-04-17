import { BottomSheet, LightGreenButton, Page } from 'components';
import { Divider, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { styles } from './GetHelp.styles';

import React from 'react';

const useStyles = makeStyles(styles);

const items = [
	{
		title: 'Safety regulations',
		href: '/get-help/regulations'
	},
	{
		title: 'How to ride',
		href: '/get-help/ride'
	},
	{
		title: 'FAQ',
		href: '/get-help/faq'
	},
	{
		title: 'Contact us',
		href: '/get-help/contact-us'
	},
	{
		title: 'Add report'
	},
	{
		title: 'My reports',
		href: '/get-help/my-reports'
	},
	{
		title: 'Privacy Policy',
		href: '/get-help/privacy-policy'
	}
];

export const GetHelp: React.FunctionComponent = () => {
	const classes = useStyles();
	const history = useHistory();
	const [showAddReport, setShowAddReport] = React.useState(false);

	const handleAddReportClick = () => {
		setShowAddReport(true);
	};

	const handleBottomSheetChange = (isOpen: boolean) => {
		setShowAddReport(isOpen);
	};

	const handleBadlyClick = () => {
		setShowAddReport(false);
	};

	const handleDamagedClick = () => {
		setShowAddReport(false);
	};

	const handleContactClick = () => {
		setShowAddReport(false);
	};

	return (
		<Page title="Get help" titleSize="large" noHorizontalContentPadding>
			<List className={classes.list}>
				{items.map((item, index) =>
					item.href ? (
						<ListItem key={index} className={classes.listItem} button component={RouterLink} to={item.href}>
							<ListItemText primary={item.title} classes={{ primary: classes.text }} />
							<Divider component="li" className={classes.divider} />
						</ListItem>
					) : (
						<ListItem key={index} className={classes.listItem} button onClick={handleAddReportClick}>
							<ListItemText primary={item.title} classes={{ primary: classes.text }} />
							<Divider component="li" className={classes.divider} />
						</ListItem>
					)
				)}
			</List>
			<div className={classes.buttonWrapper}>
				<LightGreenButton className={classes.backButton} onClick={() => history.goBack()}>
					Back
				</LightGreenButton>
			</div>
			<BottomSheet
				open={showAddReport}
				onBottomSheetChange={handleBottomSheetChange}
				onBadlyClick={handleBadlyClick}
				onDamagedClick={handleDamagedClick}
				onContactClick={handleContactClick}
			/>
		</Page>
	);
};
