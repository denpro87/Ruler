import { CSSProperties, createStyles } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, pxToRem } from 'styles';

const listItem: CSSProperties = {
	padding: `${pxToRem(11)} 0`,
	color: '#181c19'
};
const list: CSSProperties = {
	flex: 1,
	padding: 0
};
const text: CSSProperties = {
	lineHeight: 1.67,
	fontWeight: 600,
	fontSize: pxToRem(15),
	fontFamily: DEFAULT_FONT_FAMILY
};

const divider: CSSProperties = {
	backgroundColor: '#181c19',
	opacity: '5%'
};
const backButton: CSSProperties = {
	marginBottom: pxToRem(20),
	fontWeight: 'bold'
};
const sheetContainer: CSSProperties = {
	'& .react-swipeable-view-container': {
		borderTopLeftRadius: pxToRem(20),
		borderTopRightRadius: pxToRem(20)
	}
};
const sheetWrapper: CSSProperties = {
	padding: `${pxToRem(15)} ${pxToRem(20)} ${pxToRem(5)} ${pxToRem(25)}`,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center'
};
const blackBar: CSSProperties = {
	width: pxToRem(37),
	height: pxToRem(4),
	borderRadius: pxToRem(5),
	background: '#181c19'
};
const sheetTitle: CSSProperties = {
	fontFamily: DEFAULT_FONT_FAMILY,
	fontSize: pxToRem(20),
	fontWeight: 'bold',
	lineHeight: 1.5,
	color: '#181c19',
	padding: `${pxToRem(10)} 0 ${pxToRem(5)} 0`
};
const sheetText: CSSProperties = {
	fontFamily: DEFAULT_FONT_FAMILY,
	fontSize: pxToRem(15),
	fontWeight: 600,
	lineHeight: 1.67,
	color: '#181c19',
	opacity: 0.5,
	padding: `0 0 ${pxToRem(20)} 0`
};
const sheetButton: CSSProperties = {
	marginBottom: pxToRem(15),
	fontWeight: 'bold'
};

export const styles = createStyles({
	list,
	listItem,
	text,
	divider,
	backButton,
	sheetContainer,
	sheetWrapper,
	blackBar,
	sheetTitle,
	sheetText,
	sheetButton
});
