import { AppContext } from 'providers/State';
import { FormControlLabel, Checkbox as MuiCheckbox, makeStyles } from '@material-ui/core';
import { ICheckBoxProps } from './CheckBox.types';
import { Icon } from 'components';
import { styles } from './CheckBox.styles';
import React from 'react';

const useStyles = makeStyles(styles);

export const Checkbox: React.FunctionComponent<ICheckBoxProps> = ({ checked, label = '', onValueChange }) => {
	const {
		state: {
			settings: { isDarkMode }
		}
	} = React.useContext(AppContext);
	const classes = useStyles({ checked, isDarkMode: isDarkMode });

	return (
		<FormControlLabel
			className={classes.root}
			control={
				<MuiCheckbox
					classes={{ root: classes.checkBox, checked: isDarkMode ? classes.checkedDark : classes.checked }}
					checkedIcon={<Icon iconName="save" />}
					icon={<Icon iconName="save-blank" />}
					onChange={onValueChange}
					checked={checked}
				/>
			}
			label={label}
			labelPlacement="end"
		/>
	);
};
