import { CSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';
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
	height: '110px',
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

export const styles = createStyles({
	validBox,
	addButton,
	buttonIcon
});
