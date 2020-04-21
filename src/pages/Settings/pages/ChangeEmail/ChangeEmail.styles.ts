import { CSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

const innerContent: CSSProperties = {
	paddingTop: pxToRem(13),
	textAlign: 'left',
	display: 'flex',
	flexDirection: 'column',
	flex: 1
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
const saveBtn: CSSProperties = {
	marginTop: 'auto',
	marginBottom: pxToRem(20)
};
const dialogContentText: CSSProperties = {
	fontSize: pxToRem(10),
	fontWeight: 600,
	lineHeight: 1.5,
	color: '#181c19',
	opacity: 0.5,
	padding: `${pxToRem(10)} ${pxToRem(10)} ${pxToRem(5)} ${pxToRem(10)}`
};

export const styles = createStyles({
	saveBtn,
	textFieldRoot,
	innerContent,
	dialogContentText
});
