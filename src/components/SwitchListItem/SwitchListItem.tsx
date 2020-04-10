import { Box, makeStyles } from '@material-ui/core';
import { ISwitchListItemProps } from './SwitchListItem.types';
import { Stack } from '@fluentui/react';
import { Switch, Text } from 'components';
import { styles } from './SwitchListItem.styles';
import React from 'react';
import clsx from 'clsx';
const useStyles = makeStyles(styles);

export const SwitchListItem: React.FunctionComponent<ISwitchListItemProps> = ({ title, checked, disabled, onChange, name }) => {
	const classes = useStyles();

	return (
		<Box>
			<Box className={classes.li}>
				<Stack horizontal horizontalAlign="space-between" verticalAlign="center" className={classes.stackWrapper}>
					<Stack.Item>
						<Text className={clsx(classes.switchLabel, checked ? '' : classes.deactivated)}>{title}</Text>
					</Stack.Item>
					<Stack.Item>
						<Switch checked={checked} onChange={onChange} name={name} disabled={disabled} />
					</Stack.Item>
				</Stack>
			</Box>
		</Box>
	);
};
