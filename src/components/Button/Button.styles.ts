import { CSSProperties, CreateCSSProperties } from '@material-ui/styles';
import { DEFAULT_ICON_SIZE } from 'components';
import { createStyles } from '@material-ui/core';
import { font } from 'styles';

const button: CreateCSSProperties = {
	...font({
		fontSize: 15,
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: '30px',
		letterSpacing: 'normal'
	}),
	display: 'flex',
	borderRadius: 15,
	padding: '10px 15px',
	backgroundColor: (props: any) => props.backgroundColor,
	color: (props: any) => props.textColor,
	textTransform: 'none',
	'&:hover': {
		color: (props: any) => props.hoveredTextColor,
		backgroundColor: (props: any) => props.hoveredBackgroundColor
	},
	'&:active': {
		color: (props: any) => props.pressedTextColor,
		backgroundColor: (props: any) => props.pressedBackgroundColor
	},
	'&:disabled': {
		color: (props: any) => props.disabledTextColor,
		backgroundColor: (props: any) => props.disabledBackgroundColor
	},
	'& .MuiTouchRipple-child': {
		borderRadius: 15
	}
};

const buttonLabel: CreateCSSProperties = {
	display: 'inline-flex',
	justifyContent: (props: any) => (props.compact ? 'center' : 'space-between'),
	'&:after': {
		content: '""',
		display: (props: any) => (props.compact ? 'none' : 'block'),
		flex: `0 0 ${DEFAULT_ICON_SIZE}px`,
		width: DEFAULT_ICON_SIZE,
		height: DEFAULT_ICON_SIZE
	}
};

const buttonText: CSSProperties = {
	display: 'inline-block',
	paddingLeft: 5,
	paddingRight: 5
};

export const styles = createStyles({
	button,
	buttonLabel,
	buttonText
});
