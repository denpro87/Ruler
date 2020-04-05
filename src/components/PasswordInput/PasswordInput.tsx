import { IPasswordInputProps } from './PasswordInput.types';
import { Icon, IconName } from 'components';
import { InputAdornment, TextField, makeStyles } from '@material-ui/core';
import { styles } from './PasswordInput.styles';
import React from 'react';
const useStyles = makeStyles(styles);

export const PasswordInput: React.FunctionComponent<IPasswordInputProps> = ({ onChange, ...props }) => {
	const classes = useStyles();

	const [passwordIsMasked, setPasswordIsMasked] = React.useState(false);

	const togglePasswordMask = () => {
		setPasswordIsMasked(!passwordIsMasked);
	};

	return (
		<TextField
			variant="standard"
			fullWidth
			type={passwordIsMasked ? 'password' : 'text'}
			{...props}
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<Icon iconName={IconName.Eye} onClick={togglePasswordMask} />
					</InputAdornment>
				)
			}}
		/>
	);
};
