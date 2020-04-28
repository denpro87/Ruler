import { BottomSheet, Divider, LightGreenButton, Page } from 'components';
import { List, ListItem, ListItemText, Typography, makeStyles } from '@material-ui/core';

import { Link as RouterLink, useHistory } from 'react-router-dom';
import { styles } from './GetHelp.styles';

import { FormattedMessage, useIntl } from 'react-intl';
import React from 'react';
const useStyles = makeStyles(styles);

const items = [
	{
		title: 'get_help.menu.safety_regulation',
		href: '/get-help/regulations'
	},
	{
		title: 'get_help.menu.how_to_ride',
		href: '/get-help/how-to-ride'
	},
	{
		title: 'get_help.menu.faq',
		href: '/get-help/faq'
	},
	{
		title: 'get_help.menu.contact_us',
		href: '/get-help/contact-us'
	},
	{
		title: 'get_help.menu.add_report'
	},
	{
		title: 'get_help.menu.my_reports',
		href: '/get-help/my-reports'
	},
	{
		title: 'get_help.menu.privacy_policy',
		href: '/get-help/privacy-policy'
	}
];

export const GetHelp: React.FunctionComponent = () => {
	const classes = useStyles();
	const history = useHistory();
	const [showAddReport, setShowAddReport] = React.useState(false);
	const { formatMessage } = useIntl();

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
		<Page title={formatMessage({ id: 'get_help.title' })} titleSize="large" noHorizontalContentPadding>
			<List className={classes.list}>
				{items.map((item, index) =>
					item.href ? (
						<ListItem key={index} className={classes.listItem} button component={RouterLink} to={item.href}>
							<ListItemText primary={formatMessage({ id: item.title })} classes={{ primary: classes.text }} />
							<Divider />
						</ListItem>
					) : (
						<ListItem key={index} className={classes.listItem} button onClick={handleAddReportClick}>
							<ListItemText primary={formatMessage({ id: item.title })} classes={{ primary: classes.text }} />
							<Divider />
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
				title={formatMessage({ id: 'get_help.add_report_sheet.title' })}
				open={showAddReport}
				onBottomSheetChange={handleBottomSheetChange}
			>
				<Typography className={classes.sheetText}>
					<FormattedMessage id="get_help.add_report_sheet.description" />
				</Typography>
				<LightGreenButton className={classes.sheetButton} iconName="badly-parked-vehicle" onClick={handleBadlyClick}>
					<FormattedMessage id="get_help.add_report_sheet.button.badly_parked_vehicle" />
				</LightGreenButton>
				<LightGreenButton className={classes.sheetButton} iconName="damaged-vehicle" onClick={handleDamagedClick}>
					<FormattedMessage id="get_help.add_report_sheet.button.damaged_vehicle" />
				</LightGreenButton>
				<LightGreenButton className={classes.sheetButton} iconName="support" onClick={handleContactClick}>
					<FormattedMessage id="get_help.add_report_sheet.button.support" />
				</LightGreenButton>
			</BottomSheet>
		</Page>
	);
};
