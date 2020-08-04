import { BlackIcon } from 'components';
import { IAreasListItemProps } from './AreasListItem.types';
import { ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { AppContext } from 'providers/State';
import { styles } from './AreasListItem.styles';
import { useIntl } from 'react-intl';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export const AreasListItem: React.FunctionComponent<IAreasListItemProps> = ({ primaryText, secondaryText, iconName }) => {
	const { state } = React.useContext(AppContext);
	const classes = useStyles({ isDarkMode: state.settings.isDarkMode });
	const { formatMessage } = useIntl();

	return (
		<ListItem className={classes.areasListItem}>
			<ListItemIcon className={clsx(classes.iconContainer, classes.areasIconContainer)}>
				<BlackIcon iconName={iconName} />
			</ListItemIcon>
			<ListItemText
				primary={formatMessage({ id: primaryText })}
				secondary={formatMessage({ id: secondaryText })}
				classes={{
					root: classes.areasTextContainer,
					primary: classes.areasText,
					secondary: classes.areasSubtext
				}}
			/>
		</ListItem>
	);
};
