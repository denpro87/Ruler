import { CSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

const pageHeader: CSSProperties = {
	position: 'absolute',
	zIndex: 2
};

const pageContent: CSSProperties = {
	position: 'absolute',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between'
};

const footer: CSSProperties = {
	zIndex: 1,
	margin: pxToRem(20),
	width: `calc(100% - ${pxToRem(40)})`,
	display: 'flex',
	justifyContent: 'center'
};

const skipButton: CSSProperties = {
	maxWidth: pxToRem(335),
	maxHeight: pxToRem(50)
};
export const styles = createStyles({
	pageHeader,
	pageContent,
	footer,
	skipButton
});
