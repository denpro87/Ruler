import { CSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, pxToRem } from 'styles';

const addFundsWrapper: CSSProperties = {
	display: 'flex',
	flex: 1,
	flexDirection: 'column',
	paddingTop: pxToRem(22)
};

const walletType: CSSProperties = {
	marginBottom: pxToRem(20)
};

const insertAmount: CSSProperties = {
	marginBottom: pxToRem(35)
};

const selectItem: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.67,
		color: '#181c19'
	}),
	fontSize: pxToRem(15)
};

const rulerPriceBonusButtonGroup: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	padding: `${pxToRem(10)} 0 ${pxToRem(25)} 0`
};

const helperText: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.5,
		color: 'rgba(24, 28, 25, 0.5)'
	}),
	fontSize: pxToRem(10)
};

const textCenter: CSSProperties = {
	textAlign: 'center'
};

const walletHelperTextWrapper: CSSProperties = {
	paddingTop: pxToRem(10)
};

const paymentMethodHelperTextWrapper: CSSProperties = {
	// paddingTop: pxToRem(23)
};

const rulerBonusHelperTextWrapper: CSSProperties = {
	textAlign: 'center',
	padding: `${pxToRem(20)} 0 ${pxToRem(10)} 0 `
};

const rulerPriceBonusButton: CSSProperties = {
	padding: `${pxToRem(23)} 0 ${pxToRem(22)} 0`,
	marginRight: pxToRem(18)
};

const rulerPriceBonusButtonMargin: CSSProperties = {
	padding: `${pxToRem(23)} 0 ${pxToRem(22)} 0`
};

const amountTextWrapper: CSSProperties = {
	paddingTop: pxToRem(13)
};

// const textFieldRoot: CSSProperties = {
// 	marginBottom: pxToRem(25),
// 	'& .MuiInput-formControl': {
// 		marginTop: pxToRem(12)
// 	},
// 	'& .MuiInput-underline:before, .MuiInput-underline:after': {
// 		borderBottom: '2px solid #181c19'
// 	},
// 	'& input': {
// 		padding: `0 0 ${pxToRem(12)} 0`,
// 		fontSize: pxToRem(15),
// 		fontWeight: 600,
// 		lineHeight: 1.67,
// 		color: '#181c19'
// 	},
// 	'& label': {
// 		top: pxToRem(-12),
// 		fontSize: pxToRem(15),
// 		fontWeight: 600,
// 		lineHeight: 1.67,
// 		color: '#181c19!important',
// 		opacity: 0.5
// 	}
// };
const qrInputWrapper: CSSProperties = {
	marginTop: pxToRem(25)
};

const cardOwnerNameWrapper: CSSProperties = {
	marginTop: pxToRem(25)
};

const cardInfoWrapper: CSSProperties = {
	marginTop: pxToRem(12)
};

const cardDateCvcWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'row'
};
export const styles = createStyles({
	addFundsWrapper,
	walletType,
	insertAmount,
	selectItem,
	helperText,
	textCenter,
	rulerBonusHelperTextWrapper,
	walletHelperTextWrapper,
	rulerPriceBonusButtonGroup,
	rulerPriceBonusButton,
	rulerPriceBonusButtonMargin,
	amountTextWrapper,
	// textFieldRoot,
	paymentMethodHelperTextWrapper,
	qrInputWrapper,
	cardOwnerNameWrapper,
	cardInfoWrapper,
	cardDateCvcWrapper
});
