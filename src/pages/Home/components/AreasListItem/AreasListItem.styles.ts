import { CSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, pxToRem } from 'styles';

const areasListItem: CSSProperties = {
	padding: `${pxToRem(15)} 0 0 0`
};

const iconContainer: CSSProperties = {
	alignSelf: 'start'
};

const areasIconContainer: CSSProperties = {
	minWidth: pxToRem(40)
};

const areasTextContainer: CSSProperties = {
	marginTop: pxToRem(3),
	marginBottom: 0
};

const areasText: CSSProperties = {
	...font({
		fontSize: 15,
		fontWeight: 600,
		lineHeight: 1.67,
		color: '#181c19'
	})
};

const areasSubtext: CSSProperties = {
	...font({
		fontSize: 10,
		fontWeight: 600,
		lineHeight: 1.5,
		color: 'rgba(24, 28, 25, 0.5)'
	})
};

export const styles = createStyles({
	iconContainer,
	areasListItem,
	areasIconContainer,
	areasTextContainer,
	areasText,
	areasSubtext
});
