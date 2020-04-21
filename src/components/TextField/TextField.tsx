import { ITextFieldProps } from './TextField.types';
import { IconButton } from 'components';
import { InputAdornment, TextField as MuiTextField, makeStyles } from '@material-ui/core';
import { styles } from './TextField.styles';
import React from 'react';
const useStyles = makeStyles(styles);

export const TextField: React.FunctionComponent<ITextFieldProps> = ({ name, value, label, type, onValueChange, inputProps }) => {
	const classes = useStyles();

	return (
		<MuiTextField
			classes={{ root: classes.textFieldRoot }}
			type={type}
			fullWidth
			label={label}
			name={name}
			value={value}
			InputProps={inputProps}
			onChange={onValueChange}
		/>
	);
};

export const PasswordInput: React.FunctionComponent<ITextFieldProps> = props => {
	const classes = useStyles();
	const [passwordIsMasked, setPasswordIsMasked] = React.useState(true);

	const togglePasswordMask = () => {
		setPasswordIsMasked(!passwordIsMasked);
	};

	return (
		<TextField
			{...props}
			type={passwordIsMasked ? 'password' : 'text'}
			inputProps={{
				endAdornment: (
					<InputAdornment position="end">
						{<IconButton iconName="eye" onClick={togglePasswordMask} className={classes.eyeIcon} />}
					</InputAdornment>
				)
			}}
		/>
	);
};
