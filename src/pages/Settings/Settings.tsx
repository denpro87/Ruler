import { BlackButton, BlackIcon, Dialog, Page, SidebarMenuItem, Text } from 'components';
import { Box, TextField, Typography, makeStyles } from '@material-ui/core';
import { Stack } from '@fluentui/react';
import { styles } from './Settings.styles';
import { useHistory } from 'react-router-dom';
import manSvg from './images/man.svg';

import React from 'react';

const useStyles = makeStyles(styles);

export const Settings: React.FunctionComponent = () => {
	const classes = useStyles();
	const history = useHistory();
	const [logout, setLogout] = React.useState(false);
	const [deleteAccount, setDeleteAccount] = React.useState(false);
	const [email, setEmail] = React.useState('');

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
		<>
			<Page title="Settings" titleSize="large">
				<Stack horizontalAlign="stretch" grow={1} tokens={{ childrenGap: 0 }} verticalFill>
					<Stack.Item>
						<SidebarMenuItem image={<BlackIcon iconName="name" />} title="Profile" href="/settings/profile" />
					</Stack.Item>
					<Stack.Item>
						<SidebarMenuItem image={<BlackIcon iconName="notification" />} title="Notification" href="/settings/notifications" />
					</Stack.Item>
					<Stack.Item>
						<SidebarMenuItem image={<BlackIcon iconName="dark-mode" />} title="Dark Mode" href="/settings/dark-mode" />
					</Stack.Item>
					<Stack.Item>
						<SidebarMenuItem image={<BlackIcon iconName="language" />} title="Language" href="/settings/languages" />
					</Stack.Item>
					<Stack.Item>
						<SidebarMenuItem image={<BlackIcon iconName="change-password" />} title="Change Password" href="/settings/change-password" />
					</Stack.Item>
					<Stack.Item>
						<SidebarMenuItem image={<BlackIcon iconName="delete-account" />} title="Delete account" onClick={handleDeleteAccountOpen} />
					</Stack.Item>
					<Stack.Item className={classes.lastItem}>
						<SidebarMenuItem image={<BlackIcon iconName="log-out" />} title="Log out" onClick={handleLogoutClickOpen} />
					</Stack.Item>
				</Stack>
			</Page>
			<Dialog open={logout} hasClose={true} image={manSvg} onClose={handleLogoutClose} aria-labelledby="form-dialog-title" title="Log out?">
				<Text className={classes.dialogContentText}>Are you sure you want to logout?</Text>

				<BlackButton onClick={handleLogoutOk} className={classes.notRecommendedButton}>
					Yes, logout
				</BlackButton>
			</Dialog>
			<Dialog open={deleteAccount} hasClose={true} title="Delete account?" image={manSvg} onClose={handleDeleteAccountClose}>
				<Text className={classes.dialogContentText}>Enter the email address for this account, a deletion request will be sent to it</Text>
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
				<BlackButton onClick={handleSendEmail}>Send</BlackButton>
			</Dialog>
		</>
	);
};
