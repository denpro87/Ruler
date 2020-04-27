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
	padding: `0 ${pxToRem(20)} ${pxToRem(15)} ${pxToRem(20)}`
};

const footer: CSSProperties = {
	marginTop: 'auto',
	padding: `${pxToRem(20)} ${pxToRem(20)} 0 ${pxToRem(20)}`
};

const wordWrapper: CSSProperties = {
	display: 'flex',
	flexFlow: 'wrap',
	padding: `${pxToRem(15)} ${pxToRem(10)} ${pxToRem(20)} ${pxToRem(20)}`
};

const wordButton: CSSProperties = {
	margin: `0 ${pxToRem(10)} ${pxToRem(10)} 0`,
	borderRadius: pxToRem(100),
	padding: `${pxToRem(8)} ${pxToRem(20)} ${pxToRem(7)} ${pxToRem(20)}`,
	border: `solid ${pxToRem(2)} #f3f3f3`
};

const wordNumber: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.67
	}),
	fontSize: pxToRem(15),
	opacity: 'rgba(24, 28, 25, 0.5)'
};
const wordName: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.67,
		color: '#181c19'
	}),
	fontSize: pxToRem(15)
};

const copyButton: CSSProperties = {
	color: '#00b559',
	fontWeight: 'bold',
	backgroundColor: 'transparent',
	borderRadius: pxToRem(15),
	width: 'fit-content',
	paddingTop: pxToRem(10),
	paddingBottom: pxToRem(10),
	margin: `0 auto`
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
	description,
	wordWrapper,
	wordButton,
	wordNumber,
	wordName,
	copyButton
});
