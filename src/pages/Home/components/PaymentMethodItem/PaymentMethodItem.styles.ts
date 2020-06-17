import { CSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, pxToRem } from 'styles';

const paymentMethodItemContainer: CSSProperties = {
	padding: `${pxToRem(20)} 0 ${pxToRem(15)}`
	// maxWidth: pxToRem(325),
	// margin: '0 auto'
};

const paymentMethodItem: CSSProperties = {
	borderRadius: pxToRem(15),
	backgroundColor: '#181c19',
	position: 'relative',
	padding: `${pxToRem(25)} ${pxToRem(30)}`,
	display: 'flex',
	flexDirection: 'column'
};

const trashIcon: CSSProperties = {
	position: 'absolute',
	top: pxToRem(10),
	right: pxToRem(10),
	backgroundColor: 'transparent',
	padding: 0,
	boxShadow: 'none',
	'&:hover': {
		backgroundColor: 'transparent',
		opacity: 0.7
	}
};

const cardNumberText: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.33,
		letterSpacing: pxToRem(6.3),
		color: 'rgba(255, 255, 255, 0.5)'
	}),
	fontSize: pxToRem(15),
	paddingTop: pxToRem(12),
	textAlign: 'left'
};

const cardTypeText: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.67,
		color: '#ffffff'
	}),
	fontSize: pxToRem(15)
};

export const styles = createStyles({
	paymentMethodItemContainer,
	paymentMethodItem,
	cardTypeText,
	cardNumberText,
	trashIcon
});
