import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

const pageBody: CSSProperties = {
	zIndex: 0,
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	minHeight: 0
};

const backgroundContainer: CreateCSSProperties = {
	zIndex: -9999,
	position: 'absolute',
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	overflow: 'hidden',
	whiteSpace: 'nowrap',
	background: (props: any) => props.background,
	backgroundColor: (props: any) => props.backgroundColor
};

const fullPage: CSSProperties = {
	zIndex: 0,
	position: 'absolute',
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	overflow: 'hidden'
};

const fullPageBody: CSSProperties = {
	zIndex: 0,
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	minHeight: '100%'
};

const pageHeader: CSSProperties = {
	padding: `${pxToRem(20)} ${pxToRem(10)}`
};

const pageContent: CSSProperties = {
	padding: pxToRem(20)
};

export const styles = createStyles({
	pageBody,
	backgroundContainer,
	fullPage,
	fullPageBody,
	pageHeader,
	pageContent
});
