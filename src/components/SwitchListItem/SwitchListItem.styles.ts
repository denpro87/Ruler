import { CSSProperties, createStyles } from '@material-ui/styles';
import { font, pxToRem } from 'styles';
const li: CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	padding: `${pxToRem(10)} 0`
};

const deactivated: CSSProperties = {
	opacity: 0.5
};

const provider: CSSProperties = {
	marginBottom: '20px'
};

const stackWrapper: CSSProperties = {
	width: '100%',
	alignItems: 'flex-start'
};
const switchLabel: CSSProperties = {
	'& span': {
		...font({
			fontWeight: 600,
			fontStretch: 'normal',
			fontStyle: 'normal',
			lineHeight: 1.67,
			letterSpacing: 'normal',
			color: '#181c19'
		}),
		fontSize: pxToRem(15)
	},
	margin: 0
};
export const styles = createStyles({
	li,
	provider,
	switchLabel,
	stackWrapper,
	deactivated
});
