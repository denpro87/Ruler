import { CSSProperties, CreateCSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, pxToRem } from 'styles';

const button: CreateCSSProperties = {
	...font({
		fontSize: 15,
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: pxToRem(30),
		letterSpacing: 'normal'
	}),
	display: 'flex',
	borderRadius: pxToRem(15),
	padding: `${pxToRem(10)} ${pxToRem(15)}`,
	backgroundColor: (props: any) => props.backgroundColor,
	color: (props: any) => props.textColor,
	textAlign: 'center',
	textTransform: 'none',
	'&:hover': {
		color: (props: any) => props.hoveredTextColor,
		backgroundColor: (props: any) => props.hoveredBackgroundColor
	},
	'&:active': {
		color: (props: any) => props.pressedTextColor,
		backgroundColor: (props: any) => props.pressedBackgroundColor
	},
	'&:disabled': {
		color: (props: any) => props.disabledTextColor,
		backgroundColor: (props: any) => props.disabledBackgroundColor
	},
	'& .MuiTouchRipple-child': {
		borderRadius: pxToRem(15)
	}
};

const titleTextStyle: CSSProperties = {
	...font({
		fontSize: 20,
		fontWeight: 'bold',
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.5,
		letterSpacing: 'normal',
		color: '#181c19'
	}),
	padding: `0 ${pxToRem(30)}`,
	'&.MuiTypography-root': {
		whiteSpace: 'pre-wrap'
	}
};

const modalPaper: CSSProperties = {
	width: pxToRem(290),
	boxShadow: 'none',
	borderRadius: pxToRem(30),
	color: 'black',
	overflowY: 'visible',
	textAlign: 'center',
	padding: `${pxToRem(30)} 0`
};
const imgWrapper: CSSProperties = {
	margin: `${pxToRem(-114)} 53.3px 0 auto`,
	width: 'fit-content',
	height: 'fit-content'
};
const closeBtn: CSSProperties = {
	position: 'absolute',
	right: pxToRem(15),
	top: pxToRem(15),
	padding: '0 !important'
};
const dialogTitle: CSSProperties = {
	textAlign: 'center',
	padding: `${pxToRem(15)} 0 0 0`,
	...font({
		fontSize: 20,
		fontWeight: 'bold',
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.5,
		letterSpacing: 'normal'
	})
};
const dialogContent: CSSProperties = {
	padding: `0 ${pxToRem(30)}`
};
export const styles = createStyles({
	dialogContent,
	button,
	dialogTitle,
	modalPaper,
	titleTextStyle,
	closeBtn,
	imgWrapper
});
