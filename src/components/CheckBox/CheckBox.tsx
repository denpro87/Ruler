import { FormControlLabel, Checkbox as MuiCheckbox, makeStyles } from '@material-ui/core';
import { ICheckBoxProps } from './CheckBox.types';
import { Icon } from 'components';
import { styles } from './CheckBox.styles';
import React from 'react';

const useStyles = makeStyles(styles);

export const Checkbox: React.FunctionComponent<ICheckBoxProps> = ({ checked, label = '', onValueChange }) => {
	const classes = useStyles({ checked });

	return (
		<FormControlLabel
			className={classes.root}
			control={
				<MuiCheckbox
					classes={{ root: classes.checkBox, checked: classes.checked }}
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
