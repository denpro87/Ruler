import { CSSProperties, createStyles } from '@material-ui/styles';

const li: CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	'& h6': {
		width: '100%',
		paddingTop: '3px'
	}
};

const deactivated: CSSProperties = {
	opacity: 0.5
};

const provider: CSSProperties = {
	marginBottom: '20px'
};

export const styles = createStyles({
	li,
	provider,
	deactivated
});
