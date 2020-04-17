import { CSSProperties, createStyles } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, pxToRem } from 'styles';

const sheetContainer: CSSProperties = {
	'& .react-swipeable-view-container': {
		borderTopLeftRadius: pxToRem(15),
		borderTopRightRadius: pxToRem(15),
		boxShadow: 'none !important'
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

export const styles = createStyles({
	sheetContainer,
	sheetWrapper,
	blackBar,
	sheetTitle
});
