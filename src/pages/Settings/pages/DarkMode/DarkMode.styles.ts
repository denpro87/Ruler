import { CSSProperties, createStyles } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, pxToRem } from 'styles';

const providersList: CSSProperties = {
	marginTop: '6px',
	padding: '0px'
};
const subText: CSSProperties = {
	opacity: 0.5,
	color: '#181c19',
	fontWeight: 600,
	fontFamily: DEFAULT_FONT_FAMILY,
	fontSize: pxToRem(10),
	lineHeight: 1.5
};
const textWrapper: CSSProperties = {
	paddingTop: pxToRem(20),
	paddingBottom: pxToRem(11)
};
const divider: CSSProperties = {
	backgroundColor: '#181c19',
	height: pxToRem(1),
	opacity: 0.05
};
const timePicker: CSSProperties = {
	position: 'absolute',
	right: '0',
	'& .MuiInputBase-input': {
		maxWidth: '50px',
		textAlign: 'right'
	},
	'& .MuiInputAdornment-positionEnd': {
		marginLeft: 0
	},
	'& button': {
		width: '30px',
		height: '30px',
		padding: 0
	}
};
const li: CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	padding: `${pxToRem(10)} 0 ${pxToRem(15)} 0`
};
const itemText: CSSProperties = {
	margin: 0,
	'& span': {
		color: '#181c19',
		fontSize: pxToRem(15),
		lineHeight: 1.67,
		fontWeight: 600,
		fontFamily: DEFAULT_FONT_FAMILY
	}
};
const secondaryAction: CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	right: 0
};
const secondaryButton: CSSProperties = {
	padding: 0,
	color: '#181c19',
	fontSize: pxToRem(15),
	lineHeight: 1.67,
	fontWeight: 600,
	fontFamily: DEFAULT_FONT_FAMILY,
	opacity: 0.5
};
const customPicker: CSSProperties = {
	'& .picker-wrapper': {
		display: 'flex',
		height: pxToRem(320),
		flexDirection: 'column-reverse',
		borderTopLeftRadius: '15px',
		borderTopRightRadius: '15px',
		padding: `${pxToRem(20)} ${pxToRem(20)} ${pxToRem(19)} ${pxToRem(20)}`,
		'& .picker-above-highlight, .picker-below-highlight': {
			borderColor: 'rgba(24, 28, 35, 0.05) !important'
		},
		'& .picker-opt': {
			color: '#181c19',
			fontSize: pxToRem(20),
			lineHeight: 1.67,
			fontWeight: 600,
			fontFamily: DEFAULT_FONT_FAMILY
		},
		'& .picker-toolbar': {
			marginTop: pxToRem(20),
			height: pxToRem(50),
			border: 'none',
			'& button': {
				borderRadius: pxToRem(15),
				width: '100%',
				height: pxToRem(50),
				fontSize: pxToRem(15),
				lineHeight: 1.67,
				fontWeight: 'bold !important',
				fontFamily: DEFAULT_FONT_FAMILY
			},
			'& div:first-child': {
				marginRight: pxToRem(7.5),
				'& button': {
					backgroundColor: '#caf1dd',
					color: '#00b559'
				}
			},
			'& div:last-child': {
				marginLeft: pxToRem(7.5),
				'& button': {
					backgroundColor: '#00b559',
					color: '#ffffff'
				}
			}
		}
	}
};

export const styles = createStyles({
	providersList,
	li,
	timePicker,
	customPicker,
	subText,
	divider,
	secondaryAction,
	itemText,
	secondaryButton,
	textWrapper
});
