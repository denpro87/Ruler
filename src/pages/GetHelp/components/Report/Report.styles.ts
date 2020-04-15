import { CSSProperties, createStyles } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, dropShadow, pxToRem } from 'styles';

const content: CSSProperties = {
	fontSize: pxToRem(15),
	fontFamily: DEFAULT_FONT_FAMILY,
	opacity: 0.5,
	lineHeight: 1.67,
	fontWeight: 600,
	marginTop: pxToRem(5)
};
const reportContainer: CSSProperties = {
	backgroundColor: '#f3f3f3',
	marginTop: pxToRem(25),
	borderRadius: pxToRem(15)
};
const reportHeaderWrapper: CSSProperties = {
	backgroundColor: '#ffffff',
	padding: `${pxToRem(20)} ${pxToRem(20)} ${pxToRem(20)} ${pxToRem(10)}`,
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	borderBottomLeftRadius: pxToRem(15),
	borderBottomRightRadius: pxToRem(15),
	...dropShadow('0 10px 40px 0 rgba(0, 0, 0, 0.1)')
};
const reportTitleWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	'& span': {
		width: pxToRem(30),
		height: pxToRem(30),
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'& span': {
			width: pxToRem(10),
			height: pxToRem(10),
			borderRadius: pxToRem(5),
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			'& span': {
				width: pxToRem(4),
				height: pxToRem(4),
				backgroundColor: '#ffffff',
				borderRadius: pxToRem(2)
			}
		}
	},
	'& div': {
		'& h6': {
			opacity: '1 !important',
			marginTop: pxToRem(2),
			marginBottom: pxToRem(3)
		},
		'& p': {
			fontSize: pxToRem(10),
			lineHeight: 1.5,
			marginTop: 0
		}
	}
};
const reportIconWrapper: CSSProperties = {
	width: pxToRem(40),
	height: pxToRem(40),
	borderRadius: pxToRem(20),
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'relative'
};
const reportDataWrapper: CSSProperties = {
	padding: `${pxToRem(5)} 0 ${pxToRem(20)} 0`,
	'& div': {
		display: 'flex',
		paddingTop: pxToRem(15),
		'& div': {
			display: 'flex',
			flex: 1,
			flexDirection: 'column',
			padding: `0 0 0 ${pxToRem(45)}`,
			'& h6': {
				opacity: 0.5
			}
		}
	}
};
const reportDataText: CSSProperties = {
	fontSize: pxToRem(10),
	fontFamily: DEFAULT_FONT_FAMILY,
	lineHeight: 1.5,
	fontWeight: 600,
	color: '#181c19'
};
const reportBadge: CSSProperties = {
	width: pxToRem(6),
	height: pxToRem(6),
	borderRadius: pxToRem(3),
	backgroundColor: '#ffffff',
	position: 'absolute',
	top: pxToRem(12),
	left: pxToRem(12)
};
const bgYellow: CSSProperties = {
	backgroundColor: '#f8ca06'
};
const bgGreen: CSSProperties = {
	backgroundColor: '#00b559'
};
const bgWhite: CSSProperties = {
	backgroundColor: '#ffffff'
};
export const styles = createStyles({
	content,
	reportContainer,
	reportHeaderWrapper,
	reportTitleWrapper,
	reportDataWrapper,
	reportIconWrapper,
	reportDataText,
	reportBadge,
	bgYellow,
	bgGreen,
	bgWhite
});
