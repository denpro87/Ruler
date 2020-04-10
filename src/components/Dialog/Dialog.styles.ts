import { CSSProperties, CreateCSSProperties } from '@material-ui/styles';
import { DEFAULT_ICON_SIZE } from 'components/Icon';
import { createStyles } from '@material-ui/core';
import { font, pxToRem } from 'styles';

const button: CreateCSSProperties = {
	...font({
		fontSize: 15,
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: '30px',
		letterSpacing: 'normal'
	}),
	display: 'flex',
	borderRadius: pxToRem(15),
	padding: '10px 15px',
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
	})
};

const modalPaper: CSSProperties = {
	width: '290px',
	boxShadow: 'none',
	borderRadius: pxToRem(30),
	color: 'black',
	overflowY: 'visible',
	textAlign: 'center',
	padding: pxToRem(30)
};
const imgWrapper: CSSProperties = {
	marginTop: '-114px'
};
const closeBtn: CSSProperties = {
	position: 'absolute',
	right: pxToRem(10),
	top: pxToRem(10),
	padding: '0 !important'
};
const dialogTitle: CSSProperties = {
	textAlign: 'center',
	padding: '0',
	...font({
		fontSize: 20,
		fontWeight: 'bold',
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: '30px',
		letterSpacing: 'normal'
	})
};
const dialogContent: CSSProperties = {
	padding: 0
};
export const styles = createStyles({
	dialogContent,
	dialogTitle,
	modalPaper,
	titleTextStyle,
	closeBtn,
	imgWrapper
});
