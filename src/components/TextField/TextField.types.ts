import { InputProps, TextFieldProps } from '@material-ui/core';
export interface ITextFieldProps extends Pick<TextFieldProps, 'onChange'> {
	className?: string;
	value: string;
	name?: string;
	label?: string;
	type?: string;
	inputProps?: InputProps;
	onValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
