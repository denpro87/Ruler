import { CSSProperties, createStyles } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, pxToRem } from 'styles';

const providersList: CSSProperties = {
	marginTop: '6px',
	padding: '0px'
};

const subText: CSSProperties = {
	color: 'rgba(24, 28, 25, 0.5)',
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
	backgroundColor: 'rgba(24, 28, 25, 0.05)',
	height: pxToRem(1)
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
	padding: 0
};

const dateText: CSSProperties = {
	color: 'rgba(24, 28, 25, 0.5)',
	fontSize: pxToRem(15),
	lineHeight: 1.67,
	fontWeight: 600,
	fontFamily: DEFAULT_FONT_FAMILY,
	paddingRight: pxToRem(5)
};

export const styles = createStyles({
	providersList,
	li,
	timePicker,
	dateText,
	subText,
	divider,
	secondaryAction,
	itemText,
	secondaryButton,
	textWrapper
});
