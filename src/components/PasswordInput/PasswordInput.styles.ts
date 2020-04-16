import { CSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

const eyeIcon: CSSProperties = {
	padding: 0,
	marginBottom: pxToRem(12),
	boxShadow: 'none'
};

const textFieldRoot: CSSProperties = {
	marginBottom: pxToRem(25),
	'& .MuiInput-formControl': {
		marginTop: pxToRem(12)
	},
	'& .MuiInput-underline:before, .MuiInput-underline:after': {
		borderBottom: '2px solid #181c19'
	},
	'& input': {
		padding: `0 0 ${pxToRem(12)} 0`,
		fontSize: pxToRem(15),
		fontWeight: 600,
		lineHeight: 1.67,
		color: '#181c19'
	},
	'& label': {
		top: pxToRem(-12),
		fontSize: pxToRem(15),
		fontWeight: 600,
		lineHeight: 1.67,
		color: '#181c19!important',
		opacity: 0.5
	}
};

export const styles = createStyles({
	eyeIcon,
	textFieldRoot
});
