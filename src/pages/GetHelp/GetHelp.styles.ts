import { CSSProperties, createStyles } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, pxToRem } from 'styles';

const listItem: CSSProperties = {
	color: '#181c19',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	padding: `0 ${pxToRem(20)}`,
	'&:last-child li': {
		display: 'none'
	}
};
const list: CSSProperties = {
	flex: 1,
	padding: 0
};
const text: CSSProperties = {
	lineHeight: 1.67,
	fontWeight: 600,
	fontSize: pxToRem(15),
	fontFamily: DEFAULT_FONT_FAMILY,
	padding: `${pxToRem(11)} 0`
};
const divider: CSSProperties = {
	backgroundColor: '#181c19',
	opacity: '5%',
	width: '100%'
};
const buttonWrapper: CSSProperties = {
	padding: `0 ${pxToRem(20)} ${pxToRem(20)} ${pxToRem(20)}`
};
const backButton: CSSProperties = {
	fontWeight: 'bold'
};

export const styles = createStyles({
	list,
	listItem,
	text,
	divider,
	buttonWrapper,
	backButton
});
