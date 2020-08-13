import { CSSProperties, CreateCSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, pxToRem } from 'styles';

const pageHeader: CSSProperties = {
	backgroundColor: '#00b559',
	'& button': {
		backgroundColor: 'transparent',
		color: '#ffffff'
	},
	'& div:last-child span': {
		color: '#ffffff'
	}
};

const headerWrapper: CSSProperties = {
	backgroundColor: '#00b559',
	padding: `${pxToRem(15)} ${pxToRem(30)} ${pxToRem(30)} ${pxToRem(30)}`,
	borderBottomLeftRadius: pxToRem(40),
	borderBottomRightRadius: pxToRem(40)
};

const amountWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	'& div:first-child': {
		marginRight: pxToRem(64)
	}
};

const amountBox: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	paddingBottom: pxToRem(20)
};

const amountHelperText: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.5,
		color: 'rgba(255, 255, 255, 0.5)'
	}),
	fontSize: pxToRem(10)
};

const amountText: CSSProperties = {
	...font({
		fontWeight: 'bold',
		lineHeight: 1.5,
		color: 'rgb(255, 255, 255)'
	}),
	fontSize: pxToRem(32)
};

// const feeText: CSSProperties = {
// 	color: 'rgba(255, 255, 255, 0.5)'
// };

const hashWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
	paddingTop: pxToRem(5)
};

const hashText: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.67,
		color: 'rgb(255, 255, 255)'
	}),
	fontSize: pxToRem(15),
	overflow: 'hidden',
	textOverflow: 'ellipsis'
};

const copyButton: CSSProperties = {
	padding: 0,
	boxShadow: 'none',
	backgroundColor: 'transparent',
	'&:hover': {
		backgroundColor: 'transparent'
	}
};

const infoWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	padding: `${pxToRem(25)} ${pxToRem(30)} ${pxToRem(25)} ${pxToRem(30)}`,
	'& div:first-child': {
		marginRight: pxToRem(90)
	},
	'& div:last-child': {
		overflow: 'hidden',
		textOverflow: 'ellipsis'
	}
};

const infoBox: CreateCSSProperties = {
	'& span:first-child': {
		color: (props: any) => (props.isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(24, 28, 15, 0.5)'),
		paddingRight: pxToRem(10)
	},
	'& span:last-child': {
		whiteSpace: 'nowrap',
		color: (props: any) => (props.isDarkMode ? '#fff' : '#181c19')
	}
};

const footer: CSSProperties = {
	marginTop: 'auto',
	padding: `0 ${pxToRem(20)}`,
	'& button': {
		fontWeight: 'bold'
	}
};

const templateWrapper: CSSProperties = {
	padding: `0 ${pxToRem(10)}`
};

const templateName: CreateCSSProperties = {
	visibility: (props: any) => (props.checked ? 'visible' : 'hidden')
};

const dialogContentText: CSSProperties = {
	fontSize: pxToRem(10),
	fontWeight: 600,
	lineHeight: 1.5,
	color: '#181c19',
	opacity: 0.5,
	padding: `${pxToRem(10)} ${pxToRem(10)} 0 ${pxToRem(10)}`
};

export const styles = createStyles({
	pageHeader,
	headerWrapper,
	amountWrapper,
	amountBox,
	amountHelperText,
	amountText,
	// feeText,
	hashWrapper,
	hashText,
	copyButton,
	infoWrapper,
	infoBox,
	footer,
	templateWrapper,
	templateName,
	dialogContentText
});
