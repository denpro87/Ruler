import { CSSProperties, createStyles } from '@material-ui/styles';
import { font, percentage, pxToRem } from 'styles';

const footer: CSSProperties = {
	padding: pxToRem(20)
};

const menu: CSSProperties = {
	width: pxToRem(291),
	height: percentage(1),
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between'
};

const listItem: CSSProperties = {
	padding: `${pxToRem(12.5)} ${pxToRem(20)}}`
};

const listItemIcon: CSSProperties = {
	minWidth: pxToRem(40)
};

const listItemText: CSSProperties = {
	//   width: 145px;
	// height: 25px;
	// font-family: Montserrat;
	marginTop: 0,
	marginBottom: 0,
	...font({
		fontSize: 15,
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.67,
		letterSpacing: 'normal',
		color: '#181c19'
	})
};

const list: CSSProperties = {
	paddingTop: pxToRem(27.5)
};

const listItemSecondaryAction: CSSProperties = {
	marginRight: 10
};

export const styles = createStyles({
	footer,
	menu,
	list,
	listItem,
	listItemIcon,
	listItemText,
	listItemSecondaryAction
});
