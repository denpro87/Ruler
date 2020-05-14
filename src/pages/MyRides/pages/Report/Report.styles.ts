import { CSSProperties, createStyles } from '@material-ui/styles';
import { percentage, pxToRem } from 'styles';

const reportContainer: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	flex: 1
};

const reportContent: CSSProperties = {
	overflow: 'auto',
	paddingTop: pxToRem(15),
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-end'
};

const footer: CSSProperties = {
	position: 'relative',
	marginTop: 'auto',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'flex-end'
};

const fileInput: CSSProperties = {
	display: 'none'
};

const sendButton: CSSProperties = {
	maxHeight: pxToRem(50),
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

const closeIcon: CSSProperties = {
	position: 'absolute',
	right: pxToRem(0),
	top: pxToRem(0),
	padding: 0,
	boxShadow: 'none',
	color: '#ffffff',
	backgroundColor: 'transparent',
	'&:hover': {
		color: '#ffffff',
		backgroundColor: 'transparent'
	}
};

const sentImagesWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'row-reverse',
	flexWrap: 'wrap',
	borderRadius: 15,
	overflow: 'hidden'
};

const sentImageWrapper: CSSProperties = {
	width: pxToRem(100),
	height: pxToRem(100),
	marginLeft: pxToRem(1),
	marginBottom: pxToRem(1)
};

const nonSentImageWrapper: CSSProperties = {
	width: pxToRem(100),
	height: pxToRem(100),
	position: 'relative'
};

const image: CSSProperties = {
	width: percentage(1),
	height: percentage(1),
	objectFit: 'cover'
};

const nonSentImagesWrapper: CSSProperties = {
	position: 'absolute',
	left: 0,
	right: 60,
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	backgroundColor: '#f3f3f3',
	borderRadius: 15,
	overflow: 'hidden'
};

export const getTopPosition = (rowsNum: number) => {
	return -100 * rowsNum;
};

const sentMsgWrapper: CSSProperties = {
	position: 'relative',
	padding: `${pxToRem(15)} ${pxToRem(20)}`,
	backgroundColor: '#f3f3f3',
	borderRadius: pxToRem(15),
	width: 'fit-content',
	wordWrap: 'break-word',
	display: 'flex',
	flexDirection: 'row-reverse',
	alignItems: 'center'
};

const msgText: CSSProperties = {
	fontWeight: 600,
	lineHeight: 1.67,
	color: '#181c19',
	fontSize: pxToRem(15)
};

const attachIcon: CSSProperties = {
	'&>.MuiInputAdornment-positionStart': {
		display: 'none'
	}
};
export const styles = createStyles({
	attachIcon,
	msgText,
	sentMsgWrapper,
	image,
	messageInput,
	fileInput,
	reportContainer,
	footer,
	sendButton,
	reportContent,
	closeIcon,
	sentImagesWrapper,
	sentImageWrapper,
	nonSentImagesWrapper,
	nonSentImageWrapper
});
