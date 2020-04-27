import { CSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, pxToRem } from 'styles';

const walletItemList: CSSProperties = {
	paddingTop: pxToRem(25)
};

const listItem: CSSProperties = {
	borderRadius: pxToRem(15),
	marginBottom: pxToRem(15),
	border: `solid ${pxToRem(2)} #f3f3f3`,
	padding: pxToRem(20),
	'& .MuiListItemText-primary': {
		...font({
			fontWeight: 'bold',
			lineHeight: 1.67,
			color: '#181c19'
		}),
		fontSize: pxToRem(15)
	}
};

const activeListItem: CSSProperties = {
	borderColor: '#00b559'
};

const nextButton: CSSProperties = {
	marginTop: 'auto',
	fontWeight: 'bold'
};

export const styles = createStyles({
	walletItemList,
	listItem,
	activeListItem,
	nextButton
});
