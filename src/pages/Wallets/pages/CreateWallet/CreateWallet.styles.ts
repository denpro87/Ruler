import {
	CREATE_WALLET_IMAGE_INITIAL_HEIGHT,
	CREATE_WALLET_IMAGE_INITIAL_POSITION_RIGHT,
	CREATE_WALLET_IMAGE_INITIAL_WIDTH,
	CREATE_WALLET_PAGE_INITIAL_HEIGHT,
	CREATE_WALLET_PAGE_INITIAL_WIDTH
} from './CreateWalletDescription.variables';
import { CSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, pxToRem } from 'styles';

const walletItemList: CSSProperties = {
	paddingTop: pxToRem(30)
};

const listItem: CSSProperties = {
	borderRadius: pxToRem(15),
	marginBottom: pxToRem(15),
	border: `solid ${pxToRem(2)} #f3f3f3`,
	padding: pxToRem(20),
	'& .MuiListItemIcon-root': {
		minWidth: pxToRem(30)
	},
	'& .MuiListItemText-primary': {
		...font({
			fontWeight: 'bold',
			lineHeight: 1.67,
			color: '#181c19'
		}),
		fontSize: pxToRem(15),
		textAlign: 'center',
		marginLeft: pxToRem(-30)
	}
};

const activeListItem: CSSProperties = {
	borderColor: '#00b559'
};

const nextButton: CSSProperties = {
	marginTop: 'auto',
	fontWeight: 'bold'
};

const descriptionContent: CSSProperties = {
	position: 'relative'
};

const descriptionImageWrapper: CSSProperties = {
	zIndex: -1,
	position: 'absolute',
	whiteSpace: 'nowrap',
	overflow: 'visible',
	right: `${(CREATE_WALLET_IMAGE_INITIAL_POSITION_RIGHT / CREATE_WALLET_PAGE_INITIAL_WIDTH) * 100}vw`,
	top: 0,
	width: `${(CREATE_WALLET_IMAGE_INITIAL_WIDTH / CREATE_WALLET_PAGE_INITIAL_WIDTH) * 100}vw`,
	height: `${(CREATE_WALLET_IMAGE_INITIAL_HEIGHT / CREATE_WALLET_PAGE_INITIAL_HEIGHT) * 100}vh`
};

const descriptionImage: CSSProperties = {
	position: 'absolute',
	bottom: 0,
	right: 0,
	width: '100%',
	height: '100%',
	maxWidth: '100%',
	maxHeight: '100%',
	userSelect: 'none',
	userDrag: 'none'
};

const description: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.67,
		color: 'rgba(0, 0, 0, 0.5)'
	}),
	fontSize: pxToRem(15),
	padding: `0 ${pxToRem(20)} ${pxToRem(14)} ${pxToRem(20)}`
};

const footer: CSSProperties = {
	marginTop: 'auto',
	padding: `${pxToRem(20)} ${pxToRem(20)} 0 ${pxToRem(20)}`
};

export const styles = createStyles({
	walletItemList,
	listItem,
	activeListItem,
	footer,
	nextButton,
	descriptionContent,
	descriptionImageWrapper,
	descriptionImage,
	description
});
