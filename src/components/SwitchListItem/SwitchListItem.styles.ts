import { CSSProperties, createStyles } from '@material-ui/styles';
import { font, pxToRem } from 'styles';
const li: CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	'& h6': {
		width: '100%',
		paddingTop: '3px'
	}
};

const deactivated: CSSProperties = {
	opacity: 0.5
};

const provider: CSSProperties = {
	marginBottom: '20px'
};

const stackWrapper: CSSProperties = {
	width: '100%'
};
const switchLabel: CSSProperties = {
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
export const styles = createStyles({
	li,
	provider,
	switchLabel,
	stackWrapper,
	deactivated
});
