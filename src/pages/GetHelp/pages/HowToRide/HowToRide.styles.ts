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
	right: 0
};

const footer: CSSProperties = {
	position: 'absolute',
	width: '100%',
	bottom: 0,
	zIndex: 1
};

const footerContainer: CSSProperties = {
	padding: pxToRem(20)
};

const skipButton: CSSProperties = {
	maxWidth: pxToRem(335),
	maxHeight: pxToRem(50),
	margin: '0 auto'
};
export const styles = createStyles({
	pageHeader,
	pageContent,
	footer,
	footerContainer,
	skipButton
});
