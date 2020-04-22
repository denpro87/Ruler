import { CSSProperties, createStyles } from '@material-ui/styles';
import { dropShadow, pxToRem } from 'styles';

const content: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	width: pxToRem(325),
	margin: `0 auto ${pxToRem(20)} auto`
};

const image: CSSProperties = {
	height: pxToRem(167),
	borderRadius: pxToRem(15)
};

const iconButton: CSSProperties = {
	padding: pxToRem(10),
	borderRadius: pxToRem(15),
	...dropShadow(`0 ${pxToRem(10)} ${pxToRem(20)} rgba(0, 0, 0, 0.07)`)
};

export const styles = createStyles({
	content,
	iconButton,
	image
});
