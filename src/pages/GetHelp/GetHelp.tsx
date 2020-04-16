import { Divider, List, ListItem, ListItemText, Typography, makeStyles } from '@material-ui/core';
import { LightGreenButton, Page } from 'components';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { pxToRem } from 'styles';
import { styles } from './GetHelp.styles';
// @ts-ignore
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';

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

	const onHandleAddReport = () => {
		setShowAddReport(true);
	};

	const onCloseSheet = (isOpen: boolean) => {
		setShowAddReport(isOpen);
	};

	const onHandleBadly = () => {
		setShowAddReport(false);
	};

	const onHandleDamaged = () => {
		setShowAddReport(false);
	};

	const onHandleContact = () => {
		setShowAddReport(false);
	};

	return (
		<Page title="Get help" titleSize="large">
			<List className={classes.list}>
				{items.map((item, index) => (
					<div key={index}>
						{item.href && (
							<ListItem className={classes.listItem} component={RouterLink} to={item.href}>
								<ListItemText primary={item.title} classes={{ primary: classes.text }} />
							</ListItem>
						)}
						{!item.href && (
							<ListItem className={classes.listItem} button onClick={onHandleAddReport}>
								<ListItemText primary={item.title} classes={{ primary: classes.text }} />
							</ListItem>
						)}
						<Divider component="li" className={classes.divider} />
					</div>
				))}
			</List>
			<LightGreenButton className={classes.backButton} onClick={() => history.goBack()}>
				Back
			</LightGreenButton>
			<div className={classes.sheetContainer}>
				<SwipeableBottomSheet
					bodyStyle={{ borderTopLeftRadius: pxToRem(20), borderTopRightRadius: pxToRem(20) }}
					open={showAddReport}
					onChange={onCloseSheet}
				>
					<div className={classes.sheetWrapper}>
						<div className={classes.blackBar}></div>
						<Typography className={classes.sheetTitle}>Anything wrong?</Typography>
						<Typography className={classes.sheetText}>Let us know! We are here for you 24/7</Typography>
						<LightGreenButton className={classes.sheetButton} iconName="badly-parked-vehicle" onClick={onHandleBadly}>
							Report a badly parked vehicle
						</LightGreenButton>
						<LightGreenButton className={classes.sheetButton} iconName="damaged-vehicle" onClick={onHandleDamaged}>
							The vehicle is damaged
						</LightGreenButton>
						<LightGreenButton className={classes.sheetButton} iconName="support" onClick={onHandleContact}>
							Contact Ruler
						</LightGreenButton>
					</div>
				</SwipeableBottomSheet>
			</div>
		</Page>
	);
};
