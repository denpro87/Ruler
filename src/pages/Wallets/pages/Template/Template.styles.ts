import { CSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, pxToRem } from 'styles';

const templateWrapper: CSSProperties = {
	display: 'flex',
	flex: 1,
	flexDirection: 'column',
	paddingTop: pxToRem(22)
};

const textField: CSSProperties = {
	marginBottom: pxToRem(32)
};

const selectItem: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.67,
		color: '#181c19'
	}),
	fontSize: pxToRem(15)
};

const saveButton: CSSProperties = {
	fontWeight: 'bold'
};

export const styles = createStyles({
	templateWrapper,
	textField,
	selectItem,
	saveButton
});
