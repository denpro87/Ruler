import { BlackButton, BlackIcon, Dialog, Page } from 'components';
import { FormattedMessage, useIntl } from 'react-intl';
import { List, ListItem, ListItemIcon, ListItemText, TextField, Typography, makeStyles } from '@material-ui/core';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { menuList } from './Settings.data';
import { styles } from './Settings.styles';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

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
		<Page title={formatMessage({ id: 'settings.title' })} titleSize="large" noHorizontalContentPadding>
			<List className={classes.list}>
				{menuList.map((item, index) =>
					item.href ? (
						<ListItem
							key={index}
							button
							className={clsx(classes.listItem, index === menuList.length - 1 && classes.last)}
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
							onClick={item.title === 'settings.menu.log_out' ? handleLogoutClickOpen : handleDeleteAccountOpen}
							className={clsx(classes.listItem, index === menuList.length - 1 && classes.last)}
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
				title={formatMessage({ id: 'settings.logout_dialog.title' })}
				open={logout}
				hasClose={true}
				illustrationName="question"
				onClose={handleLogoutClose}
				aria-labelledby="form-dialog-title"
			>
				<Typography className={classes.dialogContentText}>{formatMessage({ id: 'settings.logout_dialog.description' })}</Typography>
				<BlackButton onClick={handleLogoutOk} className={classes.notRecommendedButton}>
					{formatMessage({ id: 'settings.logout_dialog.logout' })}
				</BlackButton>
			</Dialog>
			<Dialog
				title={formatMessage({ id: 'settings.delete_account_dialog.title' })}
				open={deleteAccount}
				hasClose={true}
				illustrationName="question"
				onClose={handleDeleteAccountClose}
			>
				<Typography className={classes.dialogContentText}>{formatMessage({ id: 'settings.delete_account_dialog.description' })}</Typography>
				<TextField
					id="name"
					placeholder={formatMessage({ id: 'settings.delete_account_dialog.email_address' })}
					type="email"
					fullWidth
					value={email}
					classes={{ root: classes.emailRoot }}
					onChange={handleEmailInputChanges}
				/>
				<BlackButton onClick={handleSendEmail}>{formatMessage({ id: 'settings.delete_account_dialog.send' })}</BlackButton>
			</Dialog>
		</Page>
	);
};
