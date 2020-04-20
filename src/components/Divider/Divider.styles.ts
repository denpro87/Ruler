import { CSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

const divider: CSSProperties = {
	borderBottom: `${pxToRem(1)} solid rgba(24, 28, 25, 0.05)`,
	boxSizing: 'border-box',
	height: pxToRem(1),
	width: '100%'
};

export const styles = createStyles({
	divider
});
