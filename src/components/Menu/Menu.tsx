import { Box, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, SwipeableDrawer, makeStyles } from '@material-ui/core';
import { GreenButton, Icon, IconButton } from 'components';
import { IMenuProps } from './Menu.types';
import { IntlShape, useIntl } from 'react-intl';
import { Link as RouterLink } from 'react-router-dom';
import { listItemIcon, styles } from './Menu.styles';
import { menuItems } from './Menu.data';
import React from 'react';
const useStyles = makeStyles(styles);

export const Menu: React.FunctionComponent<IMenuProps> = ({ open, onOpen, onClose }) => {
	const classes = useStyles();
	const { formatMessage }: IntlShape = useIntl();

	const renderMenuList = (): JSX.Element => (
		<Box className={classes.menu} role="presentation" onClick={onClose} onKeyDown={onClose}>
			<List className={classes.list}>
				{menuItems.map((item, index) => (
					<ListItem
						key={item.text}
						button
						className={classes.listItem}
						component={RouterLink}
						to={{ pathname: `/${item.href}`, state: item.href === 'home' ? { state: true } : { state: false } }}
					>
						{/* ListItemIcon classname doesn't work??? */}
						<ListItemIcon className={classes.listItemIcon} style={listItemIcon}>
							<Icon {...item.iconProps} />
						</ListItemIcon>

						<ListItemText
							primaryTypographyProps={{ className: classes.listItemTextPrimary }}
							primary={formatMessage({ id: item.text })}
							className={classes.listItemText}
						/>

						{index === 0 && (
							<ListItemSecondaryAction>
								<IconButton iconName="notification" colorType="black" />
							</ListItemSecondaryAction>
						)}
					</ListItem>
				))}
			</List>

			<Box className={classes.footer}>
				<GreenButton iconName="create-account" compact>
					{formatMessage({ id: 'welcome.button.create_account' })}
				</GreenButton>
			</Box>
		</Box>
	);

	return (
		<SwipeableDrawer
			anchor="left"
			open={open}
			onOpen={onOpen}
			onClose={onClose}
			PaperProps={{
				className: classes.menuPaper
			}}
		>
			{renderMenuList()}
		</SwipeableDrawer>
	);
};
