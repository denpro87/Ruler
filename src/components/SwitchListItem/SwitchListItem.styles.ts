import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';
import { font, pxToRem } from 'styles';
const li: CSSProperties = {
	display: 'flex',
	alignItems: 'flex-start',
	padding: `${pxToRem(10)} 0`
};

const deactivated: CSSProperties = {
	opacity: 0.5
};

const switchLabel: CreateCSSProperties = {
	'& span': {
		...font({
			fontWeight: 600,
			fontStretch: 'normal',
			fontStyle: 'normal',
			lineHeight: 1.67,
			letterSpacing: 'normal',
			color: '#181c19'
		}),
		fontSize: pxToRem(15),
		opacity: (props: any) => (props.disabled ? 0.5 : 1)
	},
	margin: 0
};
export const styles = createStyles({
	li,
	switchLabel,
	deactivated
});
