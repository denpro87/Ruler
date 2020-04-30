import { CSSProperties } from '@material-ui/styles';
import {
	RULER_WALLET_IMAGE_INITIAL_HEIGHT,
	RULER_WALLET_IMAGE_INITIAL_POSITION_RIGHT,
	RULER_WALLET_IMAGE_INITIAL_WIDTH,
	RULER_WALLET_IMAGE_ORIGIN_WIDTH,
	RULER_WALLET_PAGE_INITIAL_WIDTH
} from './RulerWallet.variables';
import { createStyles } from '@material-ui/core';
import { font, pxToRem } from 'styles';

const pageHeader: CSSProperties = {
	backgroundColor: '#00b559',
	'& button': {
		zIndex: 1,
		backgroundColor: 'transparent',
		color: '#ffffff'
	},
	'& div:last-child span': {
		color: '#ffffff'
	}
};

const content: CSSProperties = {
	position: 'absolute',
	top: 0,
	width: '100%',
	height: '100%',
	display: 'flex',
	flexDirection: 'column'
};

const headerWrapper: CSSProperties = {
	backgroundColor: '#00b559',
	width: '100%',
	height: pxToRem(RULER_WALLET_IMAGE_INITIAL_HEIGHT),
	overflow: 'hidden',
	borderBottomLeftRadius: pxToRem(40),
	borderBottomRightRadius: pxToRem(40)
};

const titleWrapper: CSSProperties = {
	padding: `${pxToRem(73)} ${pxToRem(20)} ${pxToRem(17)} ${pxToRem(30)}`,
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center'
};

const titleText: CSSProperties = {
	...font({
		fontWeight: 'bold',
		lineHeight: 1.4,
		color: '#ffffff'
	}),
	fontSize: pxToRem(25),
	zIndex: 1
};

const headerContent: CSSProperties = {
	padding: `0 ${pxToRem(20)} ${pxToRem(35)} ${pxToRem(30)}`,
	display: 'flex',
	flexDirection: 'column'
};

const headerHelperText: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.5,
		color: 'rgba(255, 255, 255, 0.5)'
	}),
	fontSize: pxToRem(10),
	zIndex: 1
};

const imageWrapper: CSSProperties = {
	position: 'absolute',
	whiteSpace: 'nowrap',
	overflow: 'visible',
	right: `${(RULER_WALLET_IMAGE_INITIAL_POSITION_RIGHT / RULER_WALLET_PAGE_INITIAL_WIDTH) * 100}vw`,
	top: 0,
	width: `${(RULER_WALLET_IMAGE_INITIAL_WIDTH / RULER_WALLET_PAGE_INITIAL_WIDTH) * 100}vw`,
	height: pxToRem(RULER_WALLET_IMAGE_INITIAL_HEIGHT),
	minHeight: pxToRem(RULER_WALLET_IMAGE_INITIAL_HEIGHT)
};

const image: CSSProperties = {
	position: 'absolute',
	bottom: 0,
	right: 0,
	width: '100%',
	height: '100%',
	maxWidth: '100%',
	maxHeight: `100%`,
	minWidth: pxToRem(RULER_WALLET_IMAGE_ORIGIN_WIDTH),
	userSelect: 'none',
	userDrag: 'none'
};

const amountText: CSSProperties = {
	...font({
		fontWeight: 'bold',
		lineHeight: 1.5,
		color: 'rgb(255, 255, 255)'
	}),
	fontSize: pxToRem(32),
	paddingBottom: pxToRem(20),
	zIndex: 1
};

const addressWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
	paddingTop: pxToRem(5)
};

const addressText: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.67,
		color: 'rgb(255, 255, 255)'
	}),
	fontSize: pxToRem(15),
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	zIndex: 1
};

const copyButton: CSSProperties = {
	padding: 0,
	boxShadow: 'none',
	backgroundColor: 'transparent',
	'&:hover': {
		backgroundColor: 'transparent'
	}
};

const historyWrapper: CSSProperties = {
	flex: 1,
	display: 'flex',
	flexDirection: 'column'
};

const footer: CSSProperties = {
	padding: pxToRem(20),
	display: 'flex',
	flexDirection: 'row',
	'& button': {
		fontWeight: 'bold',
		'&:first-child': {
			marginRight: pxToRem(7.5)
		},
		'&:last-child': {
			marginLeft: pxToRem(7.5)
		}
	}
};

export const styles = createStyles({
	content,
	headerWrapper,
	pageHeader,
	titleWrapper,
	titleText,
	image,
	imageWrapper,
	headerContent,
	headerHelperText,
	amountText,
	addressWrapper,
	addressText,
	copyButton,
	historyWrapper,
	footer
});
