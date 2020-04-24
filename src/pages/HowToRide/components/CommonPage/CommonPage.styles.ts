import { CSSProperties, CreateCSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, pxToRem } from 'styles';

const header: CreateCSSProperties = {
	backgroundImage: (props: any) => `url(${props.imagePath})`,
	backgroundSize: 'cover',
	height: pxToRem(293),
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	'@media (min-width: 636px)': {
		backgroundSize: 'contain'
	}
};

const title: CSSProperties = {
	...font({
		fontWeight: 'bold',
		color: '#181c19',
		lineHeight: 1.5
	}),
	fontSize: pxToRem(30),
	padding: `${pxToRem(15)} 0 ${pxToRem(10)} 0`
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

const button: CSSProperties = {
	// margin: `auto 0 ${pxToRem(20)} 0`
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
	title,
	description,
	footerWrapper,
	button,
	stateItem,
	stateWrapper,
	currentStateItem
});
