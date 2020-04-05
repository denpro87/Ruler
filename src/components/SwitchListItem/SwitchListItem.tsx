import { Box, Typography, makeStyles } from '@material-ui/core';
import { IOSSwitch } from 'components';
import { ISwitchListItemProps } from './SwitchListItem.types';
import { styles } from './SwitchListItem.styles';
import React from 'react';

const useStyles = makeStyles(styles);

export const SwitchListItem: React.FunctionComponent<ISwitchListItemProps> = ({ title, checked, disabled, onChange, name }) => {
	const classes = useStyles();

	return (
		<Box>
			<Box className={classes.li}>
				<Typography variant="h6" color="textPrimary" className={checked ? '' : classes.deactivated}>
					{title}
				</Typography>
				<IOSSwitch checked={checked} onChange={onChange} name={name} disabled={disabled} />
			</Box>
		</Box>
	);
};
