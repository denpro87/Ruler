import { ILanguageItemProps } from './LanguageItem.types';
import { Icon } from 'components';
import { ListItem, ListItemSecondaryAction, ListItemText, makeStyles } from '@material-ui/core';
import { styles } from './LanguageItem.styles';
import React from 'react';
const useStyles = makeStyles(styles);

export const LanguageItem: React.FunctionComponent<ILanguageItemProps> = ({ title, text, selected, onClick, code }) => {
	const classes = useStyles();

	return (
		<ListItem
			classes={{ root: classes.provider }}
			button
			onClick={(event: React.MouseEvent<HTMLElement>): void => {
				event.preventDefault();
				onClick?.(event, code);
			}}
		>
			<ListItemText
				classes={{ root: classes.itemTextRoot, primary: classes.itemTextPrimary, secondary: classes.itemTextSecondary }}
				primary={title}
				secondary={text}
			/>
			{selected && (
				<ListItemSecondaryAction>
					<Icon className={classes.selectedIcon} color="#00b559" iconName="well-done-checked" />
				</ListItemSecondaryAction>
			)}
		</ListItem>
	);
};
