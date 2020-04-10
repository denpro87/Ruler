import { CSSProperties, createStyles } from '@material-ui/styles';
import { font, pxToRem } from 'styles';
const li: CSSProperties = {
	position: 'relative',
	'& h6': {
		width: '100%',
		paddingTop: '10px'
	}
};

const selectedIcon: CSSProperties = {
	position: 'absolute',
	right: 0,
	width: '30px',
	top: pxToRem(10),
	height: '30px'
};

const provider: CSSProperties = {
	marginBottom: '10px'
};

const langTitle: CSSProperties = {
	marginTop: '5px',
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

const exampleTxt: CSSProperties = {
	opacity: 0.5,
	...font({
		fontSize: 10,
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.5,
		letterSpacing: 'normal',
		color: '#181c19'
	})
};
export const styles = createStyles({
	li,
	provider,
	exampleTxt,
	selectedIcon,
	langTitle
});
