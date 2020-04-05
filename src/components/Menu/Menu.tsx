import { Box, Button, Typography, makeStyles } from '@material-ui/core';
import { IMenuProps } from './Menu.types';
import { Icon, IconName, SidebarMenuItem } from 'components';
import { styles } from './Menu.styles';
import Drawer from '@material-ui/core/Drawer';
import React from 'react';

const useStyles = makeStyles(styles);

export const Menu: React.FunctionComponent<IMenuProps> = props => {
	const classes = useStyles();
	type Anchor = 'top' | 'left' | 'bottom' | 'right';
	const [state, setState] = React.useState({
		left: false
	});

	const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
			return;
		}

		setState({ ...state, left: open });
	};

	const list = () => (
		<div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} className={classes.menu}>
			<Box className={classes.notificationWrapper}>
				<Button color="secondary" variant="contained" disableElevation className={classes.notificationButton}>
					<Icon iconName={IconName.Notification} />
				</Button>
			</Box>
			<SidebarMenuItem image={<Icon iconName={IconName.News} />} title="News" href="/settings"></SidebarMenuItem>
			<SidebarMenuItem image={<Icon iconName={IconName.Wallet} />} title="Wallet" href="/settings"></SidebarMenuItem>
			<SidebarMenuItem image={<Icon iconName={IconName.DriverLicense} />} title="Driver License" href="/settings"></SidebarMenuItem>
			<SidebarMenuItem image={<Icon iconName={IconName.DriverLicense} />} title="Service Providers" href="/settings"></SidebarMenuItem>
			<SidebarMenuItem image={<Icon iconName={IconName.RideHistory} />} title="My rides" href="/settings"></SidebarMenuItem>
			<SidebarMenuItem image={<Icon iconName={IconName.Wallet} />} title="Invite friends" href="/settings"></SidebarMenuItem>
			<SidebarMenuItem image={<Icon iconName={IconName.HowToRide} />} title="How to ride" href="/settings"></SidebarMenuItem>
			<SidebarMenuItem image={<Icon iconName={IconName.Support} />} title="Get help" href="/settings"></SidebarMenuItem>
			<SidebarMenuItem image={<Icon iconName={IconName.Wallet} />} title="Settings" href="/settings"></SidebarMenuItem>

			<Box className={classes.footer}>
				<Button color="secondary" variant="contained" disableElevation className={classes.createAccountButton}>
					<Icon iconName={IconName.CreateAccount} />
					<Typography variant="button">Create account</Typography>
				</Button>
			</Box>
		</div>
	);

	return (
		<div>
			<React.Fragment key="left">
				<Button onClick={toggleDrawer(true)}>Menu</Button>
				<Drawer anchor="left" open={state.left} onClose={toggleDrawer(false)} className={classes.sidebarWrapper}>
					{list()}
				</Drawer>
			</React.Fragment>
		</div>
	);
};
