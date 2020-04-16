import { CSSProperties, createStyles } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, pxToRem } from 'styles';

const container: CSSProperties = {
	flex: 1,
	'& > :last-child': {
		paddingLeft: pxToRem(40)
	}
};
const buttonWrapper: CSSProperties = {
	paddingBottom: pxToRem(5),
	display: 'flex',
	flexDirection: 'column'
};
const bigButton: CSSProperties = {
	marginBottom: pxToRem(15),
	fontWeight: 'bold'
};
const li: CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	margin: `${pxToRem(27)} 0 0 0`,
	'&:first-child': {
		marginTop: pxToRem(17)
	},
	'& h6': {
		width: '100%',
		marginLeft: pxToRem(10),
		color: '#181c19',
		fontWeight: 600,
		fontSize: pxToRem(15)
	},
	'& img': {
		width: pxToRem(30),
		height: pxToRem(30)
	}
};
const content: CSSProperties = {
	fontSize: pxToRem(15),
	fontFamily: DEFAULT_FONT_FAMILY,
	opacity: 0.5,
	lineHeight: 1.67,
	fontWeight: 600,
	marginTop: pxToRem(5)
};

export const styles = createStyles({
	container,
	buttonWrapper,
	bigButton,
	content,
	li
});
