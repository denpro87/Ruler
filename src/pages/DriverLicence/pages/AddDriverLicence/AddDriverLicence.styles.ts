import { CSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

const description: CSSProperties = {
	fontSize: pxToRem(15),
	color: 'rgba(24, 28, 25, 0.5)',
	fontWeight: 600,
	lineHeight: 1.67
};
export const styles = createStyles({
	description
});
