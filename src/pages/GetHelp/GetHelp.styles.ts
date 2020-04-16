import { CSSProperties, createStyles } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, pxToRem } from 'styles';

const listItem: CSSProperties = {
	padding: `${pxToRem(11)} 0`,
	color: '#181c19'
};
const list: CSSProperties = {
	flex: 1
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
const buttonWrapper: CSSProperties = {
	paddingBottom: pxToRem(5),
	display: 'flex',
	flexDirection: 'column'
};
const bigButton: CSSProperties = {
	marginBottom: pxToRem(15),
	backgroundColor: '#caf1dd',
	color: '#00b559',
	fontSize: pxToRem(15),
	fontWeight: 'bold',
	lineHeight: 1.67,
	padding: `${pxToRem(12)} 0 ${pxToRem(13)} 0`,
	textTransform: 'none',
	borderRadius: pxToRem(15),
	height: pxToRem(50),
	flex: 1
};

export const styles = createStyles({
	list,
	listItem,
	text,
	divider,
	buttonWrapper,
	bigButton
});
