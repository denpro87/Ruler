import { ISwitchProps } from './Switch.types';
import { Switch as MuiSwitch } from '@material-ui/core';
import { styles } from './Switch.styles';
import React from 'react';

export const Switch: React.FC<ISwitchProps> = props => {
	const classes = styles();

	return (
		<MuiSwitch
			focusVisibleClassName={classes.focusVisible}
			disableRipple
			classes={{
				root: classes.root,
				switchBase: classes.switchBase,
				thumb: classes.thumb,
				track: classes.track,
				checked: classes.checked
			}}
			{...props}
		/>
	);
};
