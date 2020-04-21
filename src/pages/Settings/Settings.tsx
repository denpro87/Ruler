import { BlackButton, BlackIcon, Dialog, Page } from 'components';
import { FormattedMessage, useIntl } from 'react-intl';
import { List, ListItem, ListItemIcon, ListItemText, TextField, Typography, makeStyles } from '@material-ui/core';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { styles } from './Settings.styles';

import React from 'react';
import clsx from 'clsx';
import manSvg from './images/man.svg';

const useStyles = makeStyles(styles);
const items = [
	{
		title: 'menu.settings.profile',
		href: '/settings/profile',
		iconName: 'name'
	},
	{
		title: 'menu.settings.notifications',
		href: '/settings/notifications',
		iconName: 'notification'
	},
	{
		title: 'menu.settings.dark_mode',
		href: '/settings/dark-mode',
		iconName: 'dark-mode'
	},
	{
		title: 'menu.settings.language',
		href: '/settings/languages',
		iconName: 'language'
	},
	{
		title: 'menu.settings.change_password',
		href: '/settings/change-password',
		iconName: 'change-password'
	},
	{
		title: 'menu.settings.change_email',
		href: '/settings/change-email',
		iconName: 'invite'
	},
	{
		title: 'menu.settings.delete_account',
		iconName: 'delete-account'
	},
	{
		title: 'menu.settings.log_out',
		iconName: 'log-out'
	}
];

export const Settings: React.FunctionComponent = () => {
	const classes = useStyles();
	const history = useHistory();
	const [logout, setLogout] = React.useState(false);
	const [deleteAccount, setDeleteAccount] = React.useState(false);
	const [email, setEmail] = React.useState('');
	const { formatMessage } = useIntl();

	const handleLogoutClickOpen = () => {
		console.log();
		setLogout(true);
	};

	const handleLogoutClose = () => {
		setLogout(false);
	};

	const handleDeleteAccountOpen = () => {
		setDeleteAccount(true);
	};

	const handleEmailInputChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handleDeleteAccountClose = () => {
		setDeleteAccount(false);
	};

	const handleSendEmail = (event: React.MouseEvent<HTMLElement>) => {
		setDeleteAccount(false);
	};

	const handleLogoutOk = (event: React.MouseEvent<HTMLElement>) => {
		history.push('/welcome');
		setLogout(false);
	};

	return (
		<Page title="Settings" titleSize="large" noHorizontalContentPadding>
			<List className={classes.list}>
				{items.map((item, index) =>
					item.href ? (
						<ListItem
							key={index}
							button
							className={clsx(classes.listItem, index === items.length - 1 && classes.last)}
							component={RouterLink}
							to={item.href}
						>
							<ListItemIcon className={classes.icon}>
								<BlackIcon iconName={item.iconName} />
							</ListItemIcon>
							<ListItemText primary={<FormattedMessage id={item.title} />} classes={{ primary: classes.text }} />
						</ListItem>
					) : (
						<ListItem
							key={index}
							button
							onClick={item.title === 'menu.settings.log_out' ? handleLogoutClickOpen : handleDeleteAccountOpen}
							className={clsx(classes.listItem, index === items.length - 1 && classes.last)}
						>
							<ListItemIcon className={classes.icon}>
								<BlackIcon iconName={item.iconName} />
							</ListItemIcon>
							<ListItemText primary={<FormattedMessage id={item.title} />} classes={{ primary: classes.text }} />
						</ListItem>
					)
				)}
			</List>
			<Dialog
				title={formatMessage({ id: 'menu.settings.logout_dialog.title' })}
				open={logout}
				hasClose={true}
				image={manSvg}
				onClose={handleLogoutClose}
				aria-labelledby="form-dialog-title"
			>
				<Typography className={classes.dialogContentText}>{formatMessage({ id: 'menu.settings.logout_dialog.description' })}</Typography>
				<BlackButton onClick={handleLogoutOk} className={classes.notRecommendedButton}>
					{formatMessage({ id: 'menu.settings.logout_dialog.logout' })}
				</BlackButton>
			</Dialog>
			<Dialog
				title={formatMessage({ id: 'menu.settings.delete_account_dialog.title' })}
				open={deleteAccount}
				hasClose={true}
				image={manSvg}
				onClose={handleDeleteAccountClose}
			>
				<Typography className={classes.dialogContentText}>
					{formatMessage({ id: 'menu.settings.delete_account_dialog.description' })}
				</Typography>
				<TextField
					id="name"
					placeholder={formatMessage({ id: 'menu.settings.delete_account_dialog.email_address' })}
					type="email"
					fullWidth
					value={email}
					classes={{ root: classes.emailRoot }}
					onChange={handleEmailInputChanges}
				/>
				<BlackButton onClick={handleSendEmail}>{formatMessage({ id: 'menu.settings.delete_account_dialog.send' })}</BlackButton>
			</Dialog>
		</Page>
	);
};
