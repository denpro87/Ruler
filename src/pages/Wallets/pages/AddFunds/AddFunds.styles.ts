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
	fontSize: pxToRem(10),
	textAlign: 'center'
};

export const styles = createStyles({
	addFundsWrapper,
	walletType,
	insertAmount,
	selectItem,
	helperText,
	rulerPriceBonusButtonGroup
});
