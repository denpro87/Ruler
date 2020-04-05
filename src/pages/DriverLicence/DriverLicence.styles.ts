import { CSSProperties, createStyles } from '@material-ui/styles';
import isSubmitInvalidImage from './images/invalidate.png';
import isSubmittingImage from './images/submitting.png';
import validImage from './images/verified.png';

const btnSection: CSSProperties = {};

const heading: CSSProperties = {
	margin: '20px auto',
	width: '100%',
	textAlign: 'left',
	'& h4': {
		fontSize: '32px',
		fontWeight: 'bold',
		lineHeight: '48px'
	}
};

const description: CSSProperties = {
	margin: '10px auto',
	width: '100%',
	textAlign: 'left',
	'& h4': {
		width: 'auto',
		fontSize: '15px',
		fontWeight: '600',
		color: '#0000007f',
		lineHeight: '25px'
	},
	'& h5': {
		width: 'auto',
		fontSize: '10px',
		fontWeight: 'bold',
		color: '#181c197f',
		textAlign: 'center',
		lineHeight: '15px'
	}
};

const wrapper: CSSProperties = {
	background: 'white',
	textAlign: 'center',
	maxWidth: '768px',
	margin: '0 auto',
	height: '100%',
	padding: '20px',
	fontFamily: 'Montserrat'
};

const wrapper1: CSSProperties = {
	margin: '0 auto',
	minHeight: '50px',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'left bottom',
	position: 'relative'
};

const buttonContainer: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between'
};

const cardbox: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-start',
	alignItems: 'center',
	height: '282px',
	marginTop: '25px',
	width: 'calc(50% - 5px)'
};

const cardButton: CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	width: '155px',
	border: 'dashed #00b559 2px',
	backgroundColor: 'transparent',
	height: '240px',
	borderRadius: '20px'
};

const cardDescription: CSSProperties = {
	fontSize: '10px',
	lineHeight: '15px',
	marginTop: '12px'
};

const submitButton: CSSProperties = {
	width: '100%',
	borderRadius: '15px',
	height: '50px',
	color: 'white',
	backgroundColor: '#caf1dd'
};

const submitButtonActive: CSSProperties = {
	width: '100%',
	borderRadius: '15px',
	height: '50px',
	color: 'white',
	backgroundColor: '#00b559'
};

const footer: CSSProperties = {
	position: 'absolute',
	width: 'calc(100% - 40px)',
	bottom: '42px',
	borderRadius: '10px',
	backgroundColor: 'white'
};

const submitIcon = {
	marginRight: '10px!mportant'
};

const cardTextBlack = {
	color: '#000000',
	maxWidth: '60px',
	opacity: 1,
	lineHeight: '25px',
	marginTop: '10px',
	fontSize: '15px'
};

const cardTextWhite = {
	color: '#ffffff',
	maxWidth: '60px',
	opacity: 1,
	lineHeight: '25px',
	marginTop: '10px',
	fontSize: '15px'
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
	width: '155px',
	height: '240px',
	borderRadius: '20px',
	overflow: 'hidden'
};

const checkedIcon: CSSProperties = {
	color: 'white'
};

const closeIcon: CSSProperties = {
	position: 'absolute',
	right: '20px',
	top: '20px',
	color: 'white',
	zIndex: 3
};

const sendIcon: CSSProperties = {
	marginRight: '15px',
	transform: 'rotate(-30deg)'
};

const progressbox: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundImage: `url(${isSubmittingImage})`,
	backgroundSize: 'contain',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	height: '110px',
	margin: 'auto',
	marginTop: '30px'
};

const validbox: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundImage: `url(${validImage})`,
	backgroundSize: 'contain',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	height: '110px',
	margin: 'auto',
	marginTop: '30px'
};

const isSubmitInvalidbox: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundImage: `url(${isSubmitInvalidImage})`,
	backgroundSize: 'contain',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	height: '110px',
	margin: 'auto',
	marginTop: '30px'
};
const progressText: CSSProperties = {
	fontSize: '16px',
	color: 'black',
	fontWeight: 'bold',
	width: '60%',
	opacity: 1
};

const modal: CSSProperties = {
	position: 'fixed',
	left: 0,
	right: 0,
	bottom: 0,
	top: 0,
	backgroundColor: '#00000088',
	zIndex: 1050,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
};

const modalBody: CSSProperties = {
	width: '250px',
	height: '250px',
	backgroundColor: 'white',
	borderRadius: '20px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center'
};

const modalTitle: CSSProperties = {
	fontSize: '16px',
	fontWeight: 'bold',
	opacity: 1,
	marginTop: '5px',
	padding: '10px'
};

const modalText: CSSProperties = {
	fontSize: '12px',
	lineHeight: '18px',
	textAlign: 'center',
	width: '80%'
};

export const styles = createStyles({
	heading,
	description,
	btnSection,
	wrapper1,
	footer,
	wrapper,
	buttonContainer,
	cardbox,
	cardButton,
	cardDescription,
	submitButtonActive,
	submitButton,
	submitIcon,
	cardTextWhite,
	cardTextBlack,
	cardImage,
	cardImageContainer,
	imageCover,
	checkedIcon,
	closeIcon,
	sendIcon,
	progressbox,
	progressText,
	validbox,
	isSubmitInvalidbox,
	modal,
	modalBody,
	modalTitle,
	modalText
});
