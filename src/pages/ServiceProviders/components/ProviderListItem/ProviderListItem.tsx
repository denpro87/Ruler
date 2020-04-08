import { IProviderListItemProps } from './ProviderListItem.types';
import { Icon, Image } from 'components';
import { ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { styles } from './ProviderListItem.styles';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export const ProviderListItem: React.FunctionComponent<IProviderListItemProps> = ({
	providerIconProps,
	primaryText,
	secondaryText,
	canGoTo,
	onClick
}) => {
	const classes = useStyles();

	return (
		<ListItem className={classes.providerListItem} onClick={onClick} button={canGoTo as true}>
			<ListItemIcon className={clsx(classes.iconContainer, classes.providerIconContainer)}>
				<Image className={classes.providerIcon} src={providerIconProps.src} width={20} height={20} alt={providerIconProps.alt} />
			</ListItemIcon>
			<ListItemText
				primary={primaryText}
				secondary={secondaryText}
				classes={{
					root: classes.providerTextContainer,
					primary: classes.providerText,
					secondary: classes.providerSubtext
				}}
			/>
			{canGoTo && (
				<ListItemIcon className={classes.iconContainer}>
					<Icon iconName="forward" />
				</ListItemIcon>
			)}
		</ListItem>
	);
};
