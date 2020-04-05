import { createStyles } from '@material-ui/core';

export const DEFAULT_PAGE_BACKGROUND = '#fff';

export const styles = createStyles({
	page: {
		display: 'block',
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		overflow: 'auto',
		background: (props: any) => props.background,
		backgroundColor: (props: any) => props.backgroundColor
	}
});
