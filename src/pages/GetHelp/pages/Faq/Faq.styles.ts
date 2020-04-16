import { CSSProperties, createStyles } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, pxToRem } from 'styles';

const list: CSSProperties = {
	padding: 0
};
const searchBox: CSSProperties = { marginTop: pxToRem(5), marginBottom: pxToRem(15) };
const listItem: CSSProperties = {
	padding: `0 0 ${pxToRem(7)} 0`,
	color: '#00b559'
};
const container: CSSProperties = {
	paddingTop: pxToRem(5),
	flex: 1
};
const text: CSSProperties = {
	lineHeight: 1.67,
	fontWeight: 600,
	fontSize: pxToRem(15),
	fontFamily: DEFAULT_FONT_FAMILY
};
const content: CSSProperties = {
	opacity: 0.5
};
const subHeader: CSSProperties = {
	fontSize: pxToRem(20),
	fontWeight: 'bold',
	lineHeight: 1.5,
	marginLeft: 0,
	marginBottom: pxToRem(11),
	marginTop: pxToRem(15),
	color: '#181c19',
	fontFamily: DEFAULT_FONT_FAMILY
};
const faqContentItem: CSSProperties = {
	display: 'flex',
	marginTop: pxToRem(10)
};
const faqLi: CSSProperties = {
	marginRight: pxToRem(9)
};
export const styles = createStyles({
	list,
	searchBox,
	listItem,
	text,
	container,
	content,
	subHeader,
	faqContentItem,
	faqLi
});
