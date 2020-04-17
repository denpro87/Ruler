import { CSSProperties, createStyles } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, pxToRem } from 'styles';
const providersList: CSSProperties = {
	marginTop: pxToRem(6),
	padding: '0px'
};

const innerContent: CSSProperties = {
	textAlign: 'left'
};

const sectionBreaker: CSSProperties = {
	opacity: 0.5,
	color: '#181c19',
	fontWeight: 600,
	fontFamily: DEFAULT_FONT_FAMILY,
	fontSize: pxToRem(10),
	lineHeight: 1.5
};
const textWrapper: CSSProperties = {
	paddingTop: pxToRem(20),
	paddingBottom: pxToRem(11)
};
const divider: CSSProperties = {
	backgroundColor: '#181c19',
	height: pxToRem(1),
	opacity: 0.05
};

export const styles = createStyles({
	providersList,
	sectionBreaker,
	innerContent,
	textWrapper,
	divider
});
