import { Box, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import { ISwitchListItemProps } from './SwitchListItem.types';
import { Switch, Text } from 'components';
import { styles } from './SwitchListItem.styles';
import React from 'react';

const useStyles = makeStyles(styles);

export const SwitchListItem: React.FunctionComponent<ISwitchListItemProps> = ({ title, checked, disabled, onChange, name }) => {
	const classes = useStyles();

	return (
		<ListItem className={classes.li}>
			<ListItemText className={classes.switchLabel}>{title}</ListItemText>
			<Switch checked={checked} onChange={onChange} name={name} disabled={disabled} />
		</ListItem>
	);
};
