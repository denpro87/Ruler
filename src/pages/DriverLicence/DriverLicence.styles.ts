import { CSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';
import isSubmitInvalidImage from './images/invalidate.png';
import isSubmittingImage from './images/submitting.png';
import validImage from './images/verified.png';

const validBox: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundImage: `url(${validImage})`,
	backgroundSize: 'contain',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	height: pxToRem(110),
	margin: `${pxToRem(10)} 0 ${pxToRem(15)} 0`
};

const addButton: CSSProperties = {
	backgroundColor: 'transparent',
	fontSize: pxToRem(15),
	color: '#00b559',
	fontWeight: 'bold',
	lineHeight: 1.67,
	padding: `${pxToRem(12)} 0 ${pxToRem(13)} 0`,
	textTransform: 'none',
	margin: `auto 0 ${pxToRem(20)} 0`,
	borderRadius: pxToRem(15)
};

const buttonIcon: CSSProperties = {
	marginRight: pxToRem(5)
};

const submitWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	flex: 1
};

const progressBox: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundImage: `url(${isSubmittingImage})`,
	backgroundSize: 'contain',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	height: pxToRem(110),
	margin: `${pxToRem(25)} 0 ${pxToRem(20)} 0`
};

const progressText: CSSProperties = {
	fontSize: pxToRem(15),
	color: '#181c19',
	fontWeight: 'bold',
	lineHeight: 1.67,
	textAlign: 'center',
	padding: `0 ${pxToRem(35)}`
};

const invalidBox: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundImage: `url(${isSubmitInvalidImage})`,
	backgroundSize: 'contain',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	height: '110px',
	margin: `${pxToRem(25)} 0 ${pxToRem(20)} 0`
};

const tryButton: CSSProperties = {
	marginBottom: pxToRem(20)
};

const description: CSSProperties = {
	fontSize: pxToRem(15),
	color: 'rgba(24, 28, 25, 0.5)',
	fontWeight: 600,
	lineHeight: 1.67
};

const submitButton: CSSProperties = {
	borderRadius: pxToRem(15),
	height: pxToRem(50),
	textTransform: 'none',
	fontWeight: 'bold',
	backgroundColor: '#00b559',
	margin: `auto 0 ${pxToRem(20)} 0`,
	color: '#ffffff',
	'&.Mui-disabled': {
		backgroundColor: '#caf1dd',
		color: '#ffffff'
	},
	'&:hover': {
		backgroundColor: '#00b559c8'
	}
};

export const styles = createStyles({
	validBox,
	addButton,
	buttonIcon,
	submitWrapper,
	progressBox,
	progressText,
	invalidBox,
	tryButton,
	description,
	submitButton
});
