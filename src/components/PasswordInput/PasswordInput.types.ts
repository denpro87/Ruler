import { TextFieldProps } from '@material-ui/core';
export interface IPasswordInputProps extends Omit<TextFieldProps, ''> {
	className?: string;
	label?: string;
}
