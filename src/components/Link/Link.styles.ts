import { CSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font } from 'styles';

const link: CSSProperties = {
	cursor: 'pointer',
	textDecoration: 'none',
	...font({
		fontSize: 15,
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.67,
		letterSpacing: 'normal',
		color: '#00b559'
	}),
	'&:hover': {
		color: '#009c4c'
	},
	'&:active': {
		color: '#008240'
	}
};

export const styles = createStyles({
	link
});
