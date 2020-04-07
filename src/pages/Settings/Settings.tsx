import { BlackIcon, Page, SidebarMenuItem } from 'components';
import { Box, Button, Dialog, TextField, Typography, makeStyles } from '@material-ui/core';
import { styles } from './Settings.styles';
import React from 'react';

import { useHistory } from 'react-router-dom';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(styles);

export const Settings: React.FunctionComponent = () => {
	const classes = useStyles();
	const history = useHistory();
	const [logout, setLogout] = React.useState(false);
	const [deleteAccount, setDeleteAccount] = React.useState(false);
	const [email, setEmail] = React.useState('');

	const handleLogoutClickOpen = () => {
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

	const handleDeleteAccountCancel = () => {
		setDeleteAccount(false);
		setEmail('');
	};

	const handleSendEmail = (event: React.MouseEvent<HTMLElement>) => {
		setDeleteAccount(false);
	};

	const handleLogoutOk = (event: React.MouseEvent<HTMLElement>) => {
		history.push('/welcome');
		setLogout(false);
	};

	return (
		<Page>
			<Box>
				<Box className={classes.innerContent}>
					<Box className={classes.providersList}>
						<SidebarMenuItem image={<BlackIcon iconName="name" />} title="Profile" href="/settings/profile" />
						<SidebarMenuItem image={<BlackIcon iconName="notification" />} title="Notification" href="/settings/notifications" />
						<SidebarMenuItem image={<BlackIcon iconName="dark-mode" />} title="Dark Mode" href="/settings/dark-mode" />
						<SidebarMenuItem image={<BlackIcon iconName="language" />} title="Language" href="/settings/languages" />
						<SidebarMenuItem image={<BlackIcon iconName="change-password" />} title="Change Password" href="/settings/change-password" />
						<SidebarMenuItem image={<BlackIcon iconName="delete-account" />} title="Delete account" onClick={handleDeleteAccountOpen} />
					</Box>
				</Box>
				<Box className={classes.footer}>
					<SidebarMenuItem image={<BlackIcon iconName="logout" />} title="Log out" onClick={handleLogoutClickOpen} />
				</Box>
			</Box>
			<div>
				<Dialog open={logout} onClose={handleLogoutClose} aria-labelledby="form-dialog-title" classes={{ paper: classes.logoutDialog }}>
					<DialogTitle classes={{ root: classes.dialogTitle }}>Log out?</DialogTitle>
					<DialogContent className={classes.logoutContent}>
						<Typography variant="caption">Are you sure you want to logout?</Typography>
					</DialogContent>
					<DialogActions classes={{ root: classes.logOutAction, spacing: classes.logOutActionSpacing }}>
						<Button onClick={handleLogoutClose} color="secondary">
							Cancel
						</Button>
						<Button onClick={handleLogoutOk} color="secondary" className={classes.notRecommendedButton}>
							Yes, logout
						</Button>
					</DialogActions>
				</Dialog>

				<Dialog
					open={deleteAccount}
					onClose={handleDeleteAccountClose}
					aria-labelledby="form-dialog-title"
					classes={{ paper: classes.deleteAccountDialog }}
				>
					<DialogTitle classes={{ root: classes.dialogTitle }}>Delete account?</DialogTitle>
					<DialogContent className={classes.logoutContent}>
						<Typography variant="caption">Enter the email address for this account, a deletion request will be sent to it</Typography>
						<TextField
							margin="normal"
							id="name"
							placeholder="Email address"
							type="email"
							fullWidth
							variant="outlined"
							value={email}
							classes={{ root: classes.emailRoot }}
							onChange={handleEmailInputChanges}
						/>
					</DialogContent>
					<DialogActions classes={{ root: classes.deleteAccountAction }}>
						<Button onClick={handleDeleteAccountCancel} color="secondary" className={classes.notRecommendedButton}>
							Cancel
						</Button>
						<Button onClick={handleSendEmail} color="secondary">
							Send
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		</Page>
	);
};
