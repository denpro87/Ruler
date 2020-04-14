import { Box, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, SwipeableDrawer, makeStyles } from '@material-ui/core';
import { GreenButton, Icon, IconButton } from 'components';
import { IMenuProps } from './Menu.types';
import { listItemIcon, styles } from './Menu.styles';
import { menuItems } from './MenuList';
import React from 'react';

const useStyles = makeStyles(styles);

export const Menu: React.FunctionComponent<IMenuProps> = props => {
	const classes = useStyles();

	const [open, setOpen] = React.useState(true);

	const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent): void => {
		if (
			event &&
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
		) {
			return;
		}

		setOpen(open);
	};

	const renderMenuList = (): JSX.Element => (
		<div className={classes.menu} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
			<List className={classes.list}>
				{menuItems.map((item, index) => (
					<ListItem key={item.text} button className={classes.listItem}>
						{/* ListItemIcon classname doesn't work??? */}
						<ListItemIcon className={classes.listItemIcon} style={listItemIcon}>
							<Icon {...item.iconProps} />
						</ListItemIcon>

						<ListItemText
							primaryTypographyProps={{ className: classes.listItemTextPrimary }}
							primary={item.text}
							className={classes.listItemText}
						/>

						{index === 0 && (
							<ListItemSecondaryAction>
								<IconButton iconName="notification" />
							</ListItemSecondaryAction>
						)}
					</ListItem>
				))}
			</List>

			<Box className={classes.footer}>
				<GreenButton iconName="create-account" compact>
					Create account
				</GreenButton>
			</Box>
		</div>
	);

	return (
		<div>
			<SwipeableDrawer anchor="left" open={open} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
				{renderMenuList()}
			</SwipeableDrawer>
		</div>
	);
};
