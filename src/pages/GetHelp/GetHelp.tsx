import { Button, Divider, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import { IonActionSheet } from '@ionic/react';
import { LightGreenButton, Page } from 'components';
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

	const onHandleAddReport = () => {
		setShowAddReport(true);
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
			<IonActionSheet
				isOpen={showAddReport}
				cssClass="gethelp-action-sheet"
				onDidDismiss={() => setShowAddReport(false)}
				header="Anything wrong?"
				buttons={[
					{
						text: 'Let us know! We are here for your 24/7',
						role: 'destructive',
						cssClass: 'gethelp-action-title'
					},
					{
						text: 'Report a badly parked vehicle',
						// role: 'destructive',
						cssClass: 'gethelp-action-button gethelp-action-dadly-button',
						handler: () => {
							console.log('badly parked');
						}
					},
					{
						text: 'The vehicle is damaged',
						cssClass: 'gethelp-action-button gethelp-action-damage-button',
						handler: () => {
							console.log('vehicle is damaged.');
						}
					},
					{
						text: 'Contact Ruler',
						cssClass: 'gethelp-action-button gethelp-action-ruler-button',
						handler: () => {
							console.log('contact ruler');
						}
					}
				]}
			></IonActionSheet>
		</Page>
	);
};
