import { CSSProperties, createStyles } from '@material-ui/styles';
import { percentage, pxToRem } from 'styles';

const reportContainer: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	flex: 1,
	overflow: 'auto'
};

const footer: CSSProperties = {
	marginTop: 'auto',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between'
};

const fileInput: CSSProperties = {
	display: 'none'
};

const sendButton: CSSProperties = {
	marginLeft: pxToRem(10),
	'&:hover': {
		color: '#ffffff',
		backgroundColor: '#00b559'
	},
	borderRadius: pxToRem(15),
	backgroundColor: '#00b559',
	'&.Mui-disabled': {
		backgroundColor: '#caf1dd',
		color: '#ffffff'
	}
};

const messageInput: CSSProperties = {
	width: percentage(1),
	backgroundColor: '#f3f3f3',
	borderRadius: pxToRem(15),
	'&.MuiInputBase-multiline': {
		padding: `${pxToRem(10)} 0 ${pxToRem(10)} ${pxToRem(15)}`
	},
	'&>.MuiInputBase-inputMultiline': {
		padding: `${pxToRem(2)} 0 ${pxToRem(3)} ${pxToRem(5)}`
	},
	'&>.MuiInputAdornment-positionStart': {
		marginRight: 0
	},
	lineHeight: 1.67,
	fontWeight: 600,
	fontSize: pxToRem(15),
	color: 'rgba(24, 28, 25, 0.5)'
};

export const styles = createStyles({
	messageInput,
	fileInput,
	reportContainer,
	footer,
	sendButton
});
