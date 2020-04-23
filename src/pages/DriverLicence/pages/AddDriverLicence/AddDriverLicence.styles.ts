import { CSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

const description: CSSProperties = {
	fontSize: pxToRem(15),
	color: 'rgba(24, 28, 25, 0.5)',
	fontWeight: 600,
	lineHeight: 1.67
};

const buttonContainer: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	padding: `${pxToRem(25)} ${pxToRem(5)}`
};

const cardBox: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-start',
	alignItems: 'center',
	width: `calc(50% - ${pxToRem(7.5)})`,
	'&> span': {
		paddingTop: pxToRem(12)
	}
};

const cardButton: CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	width: '100%',
	backgroundColor: 'transparent',
	backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='15' ry='15' stroke='%2300B559FF' stroke-width='4' stroke-dasharray='7%2c 13' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
	height: pxToRem(240),
	borderRadius: pxToRem(15)
};

const cardText: CSSProperties = {
	color: '#181c19',
	maxWidth: pxToRem(60),
	paddingTop: pxToRem(10),
	fontSize: pxToRem(15),
	lineHeight: 1.67,
	fontWeight: 'bold',
	textAlign: 'center'
};

const descriptionText: CSSProperties = {
	fontSize: pxToRem(10),
	fontWeight: 600,
	color: 'rgba(24, 28, 25, 0.5)',
	textAlign: 'center'
};

const submitButton: CSSProperties = {
	borderRadius: pxToRem(15),
	height: pxToRem(50),
	textTransform: 'none',
	fontWeight: 'bold',
	backgroundColor: '#00b559',
	color: '#ffffff',
	'&.Mui-disabled': {
		backgroundColor: '#caf1dd',
		color: '#ffffff'
	},
	'&:hover': {
		backgroundColor: '#00b559c8'
	}
};

const footer: CSSProperties = {
	marginTop: 'auto',
	display: 'flex',
	flexDirection: 'column',
	'&> span': {
		padding: `${pxToRem(7)} 0 ${pxToRem(8)} 0`
	}
};

const cardImage: CSSProperties = {
	width: '100%',
	height: '100%',
	objectFit: 'cover'
};

const imageCover: CSSProperties = {
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: '#00b559c8',
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'column',
	alignItems: 'center',
	zIndex: 2
};

const cardImageContainer: CSSProperties = {
	position: 'relative',
	width: pxToRem(155),
	height: pxToRem(240),
	borderRadius: pxToRem(15),
	overflow: 'hidden'
};

const closeIcon: CSSProperties = {
	position: 'absolute',
	right: pxToRem(10),
	top: pxToRem(10),
	padding: 0,
	boxShadow: 'none',
	color: 'white',
	backgroundColor: 'transparent',
	zIndex: 3
};

const buttonIcon: CSSProperties = {
	marginRight: pxToRem(5)
};

const dialogContentText: CSSProperties = {
	fontSize: pxToRem(10),
	fontWeight: 600,
	lineHeight: 1.5,
	color: 'rgba(24, 28, 25, 0.5)',
	padding: `${pxToRem(15)} 0`
};

export const styles = createStyles({
	description,
	footer,
	buttonContainer,
	cardBox,
	cardButton,
	descriptionText,
	submitButton,
	cardText,
	cardImage,
	cardImageContainer,
	imageCover,
	closeIcon,
	buttonIcon,
	dialogContentText
});
