import { CSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

const innerContent: CSSProperties = {
	paddingTop: pxToRem(13),
	textAlign: 'left',
	display: 'flex',
	flexDirection: 'column',
	flex: 1
};
const saveBtn: CSSProperties = {
	marginTop: 'auto'
};
const dialogContentText: CSSProperties = {
	padding: `${pxToRem(10)} ${pxToRem(10)} ${pxToRem(5)} ${pxToRem(10)} !important`
};
const smallText: CSSProperties = {
	fontSize: pxToRem(10),
	fontWeight: 600,
	lineHeight: 1.5,
	color: '#181c19',
	opacity: 0.5,
	textAlign: 'center',
	padding: `${pxToRem(7)} 0 ${pxToRem(20)} 0`
};

export const styles = createStyles({
	saveBtn,
	innerContent,
	dialogContentText,
	smallText
});
