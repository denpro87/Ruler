import { CSSProperties, CreateCSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, fontSmoothing } from 'styles';

const text: CreateCSSProperties = {
	...font(),
	fontStretch: (props: any) => props.fontStretch,
	fontStyle: (props: any) => props.fontStyle,
	fontVariant: (props: any) => props.fontVariant,
	fontWeight: (props: any) => props.fontWeight,
	fontSize: (props: any) => props.fontSize,
	lineHeight: (props: any) => props.lineHeight,
	fontFamily: (props: any) => props.fontFamily,
	letterSpacing: (props: any) => props.letterSpacing,
	color: (props: any) => props.color,
	whiteSpace: (props: any) => (props.nowrap ? 'nowrap' : 'normal'),
	display: (props: any) => (props.block ? 'block' : 'inline'),
	textDecoration: 'none',
	...fontSmoothing('antialiased'),
	textOverflow: 'ellipsis',
	overflow: 'hidden'
};

const paragraph: CSSProperties = {
	marginBottom: '1rem'
};

export const styles = createStyles({
	text,
	paragraph
});
