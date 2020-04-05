import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: 52,
			height: 31,
			padding: 0,
			marginTop: theme.spacing(1),
			marginBottom: theme.spacing(1)
		},
		switchBase: {
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
		},
		thumb: {
			width: 29,
			height: 28,
			boxShadow: '0 3px 8px 0 rgba(0, 0, 0, 0.15), 0 3px 1px 0 rgba(0, 0, 0, 0.06)'
		},
		track: {
			borderRadius: 31 / 2,
			border: 'none',
			backgroundColor: 'rgba(120, 120, 128, 0.16)',
			opacity: 1,
			transition: 'none'
		},
		checked: {},
		focusVisible: {}
	})
);
