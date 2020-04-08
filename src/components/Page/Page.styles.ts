import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';
import { font, pxToRem } from 'styles';

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
	padding: `${pxToRem(20)} ${pxToRem(10)}`,
	paddingBottom: pxToRem(10)
};

const pageHeaderInner: CSSProperties = {
	paddingLeft: pxToRem(10),
	paddingRight: pxToRem(10)
};

const pageContent: CreateCSSProperties = {
	padding: (props: any) => (props.hasPageHeader ? `0 ${pxToRem(20)}` : pxToRem(20))
};

const pageTitle: CreateCSSProperties = {
	...font({
		fontWeight: 'bold',
		fontStretch: 'normal',
		fontStyle: 'normal',
		letterSpacing: 'normal',
		color: '#181c19'
	}),
	fontSize: (props: any) => (props.titleSize === 'large' ? pxToRem(32) : pxToRem(25)),
	lineHeight: (props: any) => (props.titleSize === 'large' ? 1.5 : 1.4),
	marginTop: pxToRem(20)
};

export const styles = createStyles({
	pageTitle,
	pageBody,
	backgroundContainer,
	fullPage,
	fullPageBody,
	pageHeader,
	pageHeaderInner,
	pageContent
});
