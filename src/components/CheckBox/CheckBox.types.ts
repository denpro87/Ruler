import { CheckboxProps, InputProps } from '@material-ui/core';
export interface ICheckBoxProps extends Pick<CheckboxProps, 'onChange'> {
	className?: string;
	checked: boolean;
	label?: string;
	inputProps?: InputProps;
	onValueChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}
