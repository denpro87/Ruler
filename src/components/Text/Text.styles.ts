import { createStyles } from '@material-ui/core';
import { font, fontSmoothing } from 'styles';

export const styles = createStyles({
	text: (props: any) => ({
		...font({
			fontStretch: props.fontStretch,
			fontStyle: props.fontStyle,
			fontVariant: props.fontVariant,
			fontWeight: props.fontWeight,
			fontSize: props.fontSize,
			lineHeight: props.lineHeight,
			fontFamily: props.fontFamily,
			letterSpacing: props.letterSpacing,
			color: props.color
		}),
		whiteSpace: props.nowrap ? 'nowrap' : 'normal',
		display: props.block ? 'block' : 'inline',
		textDecoration: 'none',
		...fontSmoothing('antialiased'),
		textOverflow: 'ellipsis',
		overflow: 'hidden'
	}),
	paragraph: {
		marginBottom: '1rem'
	}
});
