import { CSSProperties } from '@material-ui/styles';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const root = (theme: Theme): CSSProperties => ({
	width: 52,
	height: 31,
	padding: 0,
	marginTop: theme.spacing(1),
	marginBottom: theme.spacing(1)
});

const switchBase = (theme: Theme): CSSProperties => ({
	padding: 1,
	'&$checked': {
		transform: 'translateX(20px)',
		color: theme.palette.common.white,
		'& + $track': {
			backgroundColor: theme.palette.secondary.main,
			opacity: 1,
			border: 'none'
		}
	},
	'&$focusVisible $thumb': {
		color: theme.palette.secondary.main,
		border: '6px solid #fff'
	},
	'&disabled': {
		backgroundColor: '#555555'
	}
});

const thumb: CSSProperties = {
	width: 29,
	height: 28,
	boxShadow: '0 3px 8px 0 rgba(0, 0, 0, 0.15), 0 3px 1px 0 rgba(0, 0, 0, 0.06)'
};

const track: CSSProperties = {
	borderRadius: 31 / 2,
	border: 'none',
	backgroundColor: 'rgba(120, 120, 128, 0.16)',
	opacity: 1,
	transition: 'none'
};

export const styles = (theme: Theme) =>
	createStyles({
		root: root(theme),
		switchBase: switchBase(theme),
		thumb,
		track,
		// `checked` and `focusVisible` are required to be an empty object.
		checked: {},
		focusVisible: {}
	});
