import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';
import isSubmitInvalidImage from './images/invalidate.svg';
import isSubmittingImage from './images/submitting.svg';
import validImage from './images/verified.svg';

const bannerBox: CreateCSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundImage: (props: any) =>
		props.state === 'progress'
			? `url(${isSubmittingImage})`
			: props.state === 'success'
			? `url(${validImage})`
			: `url(${isSubmitInvalidImage})`,
	backgroundSize: 'contain',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	height: pxToRem(110),
	width: pxToRem(325),
	margin: (props: any) =>
		props.state === 'success' ? `${pxToRem(15)} auto ${pxToRem(10)} auto` : `${pxToRem(25)} auto ${pxToRem(20)} auto`
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

const bannerText: CreateCSSProperties = {
	fontSize: pxToRem(15),
	color: (props: any) => (props.state === 'progress' ? '#181c19' : '#ffffff'),
	fontWeight: 'bold',
	lineHeight: 1.67,
	textAlign: 'center',
	padding: `0 ${pxToRem(35)}`
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
	bannerBox,
	addButton,
	buttonIcon,
	submitWrapper,
	bannerText,
	tryButton,
	description,
	submitButton
});
