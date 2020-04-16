import { CSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

const innerContent: CSSProperties = {
	paddingTop: '23px',
	textAlign: 'left',
	display: 'flex',
	flexDirection: 'column',
	flex: 1
};
const saveBtn: CSSProperties = {
	marginTop: 'auto',
	marginBottom: pxToRem(20)
};
const dialogContentText: CSSProperties = {
	fontSize: pxToRem(10),
	fontWeight: 600,
	lineHeight: 1.5,
	color: '#181c19',
	opacity: 0.5,
	padding: `${pxToRem(10)} 0 ${pxToRem(5)} 0`
};

export const styles = createStyles({
	innerContent,
	saveBtn,
	dialogContentText
});
