import { CSSProperties, createStyles } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, font, pxToRem } from 'styles';

const textFieldRoot: CSSProperties = {
	marginBottom: pxToRem(25),
	fontFamily: DEFAULT_FONT_FAMILY,
	'& .MuiInput-underline:before, .MuiInput-underline:after': {
		borderBottom: '2px solid #181c19'
	},
	'& input, .MuiSelect-root': {
		padding: `0 0 ${pxToRem(12)} 0`,
		fontSize: pxToRem(15),
		fontWeight: 600,
		lineHeight: 1.67,
		color: '#181c19',
		overflow: 'hidden',
		textOverflow: 'ellipsis'
	},
	'& label': {
		top: pxToRem(-12),
		fontSize: pxToRem(15),
		fontWeight: 600,
		lineHeight: 1.67,
		color: 'rgba(24, 28, 25, 0.5) !important'
	},
	'& .MuiSelect-selectMenu:focus': {
		backgroundColor: 'transparent'
	},
	'& .MuiInputAdornment-root': {
		paddingBottom: pxToRem(12),
		'& p': {
			...font({
				fontWeight: 600,
				lineHeight: 1.67,
				color: '#181c19'
			}),
			fontSize: pxToRem(15)
		},
		'& button': {
			padding: 0,
			boxShadow: 'none',
			marginLeft: pxToRem(32)
		}
	}
};

const selectIcon: CSSProperties = {
	position: 'absolute',
	color: '#181c19',
	right: 0,
	top: `calc(50% - ${pxToRem(20)})`,
	zIndex: -100
};

export const styles = createStyles({
	textFieldRoot,
	selectIcon
});
