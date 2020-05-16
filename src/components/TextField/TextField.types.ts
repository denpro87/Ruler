import { InputProps, SelectProps, TextFieldProps } from '@material-ui/core';
export interface ITextFieldProps extends Pick<TextFieldProps, 'onChange'> {
	className?: string;
	value: string;
	name?: string;
	multiline?: boolean;
	disableUnderline?: boolean;
	label?: string;
	type?: string;
	select?: boolean;
	disabled?: boolean;
	inputProps?: InputProps;
	selectProps?: SelectProps;
	onValueChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
