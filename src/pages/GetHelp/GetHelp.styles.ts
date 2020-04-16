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
const backButton: CSSProperties = {
	marginBottom: pxToRem(20)
};

export const styles = createStyles({
	list,
	listItem,
	text,
	divider,
	backButton
});
