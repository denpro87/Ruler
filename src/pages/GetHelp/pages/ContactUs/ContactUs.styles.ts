import { CSSProperties, createStyles, CreateCSSProperties } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, pxToRem, isDarkMode } from 'styles';

const container: CreateCSSProperties = {
	background: isDarkMode ? '#181c19' : '#fff',
	flex: 1
};
const buttonWrapper: CSSProperties = {
	paddingBottom: pxToRem(5),
	paddingTop: pxToRem(30),
	display: 'flex',
	flexDirection: 'column'
};
const bigButton: CreateCSSProperties = {
	marginBottom: pxToRem(15),
	backgroundColor: isDarkMode ? '#303331' : 'rgb(202, 241, 221)',
	color: isDarkMode ? '#fff' : 'rgb(0, 181, 89)',
	fontWeight: 'bold'
};
const li: CreateCSSProperties = {
	display: 'flex',
	alignItems: 'center',
	margin: `${pxToRem(23)} 0 ${pxToRem(5)} 0`,
	'&:first-child': {
		marginTop: pxToRem(17)
	},
	'& h6': {
		width: '100%',
		marginLeft: pxToRem(10),
		color: isDarkMode ? '#fff' : '#181c19',
		fontWeight: 600,
		fontSize: pxToRem(15)
	},
	'& img': {
		width: pxToRem(30),
		height: pxToRem(30)
	}
};
const content: CreateCSSProperties = {
	fontSize: pxToRem(15),
	fontFamily: DEFAULT_FONT_FAMILY,
	opacity: 0.5,
	lineHeight: 1.67,
	fontWeight: 600,
	paddingLeft: pxToRem(40),
	color: isDarkMode ? '#fff' : '#000'
};

export const styles = createStyles({
	container,
	buttonWrapper,
	bigButton,
	content,
	li
});
