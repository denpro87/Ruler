import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, pxToRem } from 'styles';

const sheetContainer: CSSProperties = {
	'& .react-swipeable-view-container': {
		borderTopLeftRadius: pxToRem(15),
		borderTopRightRadius: pxToRem(15),
		boxShadow: 'none !important'
	}
};

const sheetWrapper: CreateCSSProperties = {
	zIndex: 9999,
	backgroundColor: (props: any) => (props.darkMode ? 'rgba(24, 28, 25, 0.5)' : undefined),
	backdropFilter: (props: any) => (props.darkMode ? `blur(${pxToRem(40)})` : undefined),
	padding: (props: any) => (props.darkMode ? `${pxToRem(10)} 0 0 0` : `${pxToRem(15)} ${pxToRem(20)} ${pxToRem(5)} ${pxToRem(25)}`)
	// display: 'flex',
	// flexDirection: 'column',
	// justifyContent: 'center',
	// alignItems: 'center'
};

const topWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center'
};

const blackBar: CreateCSSProperties = {
	width: pxToRem(37),
	height: pxToRem(4),
	borderRadius: pxToRem(5),
	background: (props: any) => (props.darkMode ? '#ffffff' : '#181c19')
};

const sheetTitle: CreateCSSProperties = {
	fontFamily: DEFAULT_FONT_FAMILY,
	fontSize: pxToRem(20),
	fontWeight: 'bold',
	lineHeight: 1.5,
	color: (props: any) => (props.darkMode ? '#ffffff' : '#181c19'),
	padding: (props: any) => (props.darkMode ? `${pxToRem(31)} 0 ${pxToRem(10)} 0` : `${pxToRem(10)} 0 ${pxToRem(5)} 0`)
};

const sheetDescription: CSSProperties = {
	fontFamily: DEFAULT_FONT_FAMILY,
	fontSize: pxToRem(15),
	fontWeight: 600,
	lineHeight: 1.67,
	color: 'rgba(255, 255, 255, 0.5)',
	maxWidth: pxToRem(230),
	textAlign: 'center'
};
export const styles = createStyles({
	sheetContainer,
	sheetWrapper,
	blackBar,
	sheetTitle,
	sheetDescription,
	topWrapper
});
