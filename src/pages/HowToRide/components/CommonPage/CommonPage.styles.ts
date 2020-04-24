import { CSSProperties, CreateCSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, pxToRem } from 'styles';

const header: CSSProperties = {
	height: pxToRem(289)
};

const headerBackground: CreateCSSProperties = {
	position: 'absolute',
	left: (props: any) =>
		props.step === 0
			? pxToRem(-100)
			: props.step === 1
			? pxToRem(12.3)
			: props.step === 2
			? pxToRem(13)
			: props.step === 3
			? pxToRem(14)
			: pxToRem(32),
	top: pxToRem(27)
};

const title: CSSProperties = {
	...font({
		fontWeight: 'bold',
		color: '#181c19',
		lineHeight: 1.5
	}),
	fontSize: pxToRem(32),
	padding: `${pxToRem(20)} 0 ${pxToRem(10)} 0`
};

const description: CSSProperties = {
	...font({
		fontWeight: 600,
		color: 'rgba(24, 28, 25, 0.5)',
		lineHeight: 1.67
	}),
	fontSize: pxToRem(15)
};

const footerWrapper: CSSProperties = {
	margin: `auto 0 ${pxToRem(20)} 0`
};

const stateWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	padding: `${pxToRem(20)} 0 ${pxToRem(30)} 0`
};

const stateItem: CSSProperties = {
	width: pxToRem(4),
	height: pxToRem(4),
	backgroundColor: '#00b559',
	margin: `0 ${pxToRem(5)}`,
	borderRadius: pxToRem(10)
};

const currentStateItem: CSSProperties = {
	width: pxToRem(30)
};

export const styles = createStyles({
	header,
	headerBackground,
	title,
	description,
	footerWrapper,
	stateItem,
	stateWrapper,
	currentStateItem
});
