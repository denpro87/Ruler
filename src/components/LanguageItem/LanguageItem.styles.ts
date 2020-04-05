import { CSSProperties, createStyles } from '@material-ui/styles';

const li: CSSProperties = {
	position: 'relative',
	'& h6': {
		width: '100%',
		paddingTop: '10px'
	},
	'& svg': {
		position: 'absolute',
		right: 0,
		width: '30px',
		top: '15px',
		height: '30px'
	}
};

const text: CSSProperties = {
	paddingLeft: '40px'
};

const provider: CSSProperties = {
	marginBottom: '10px'
};

export const styles = createStyles({
	li,
	provider,
	text
});
