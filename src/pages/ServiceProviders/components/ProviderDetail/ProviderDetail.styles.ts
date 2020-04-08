import { CSSProperties, createStyles } from '@material-ui/styles';

const li: CSSProperties = {
	display: 'flex',
	'& h6': {
		width: '100%',
		marginLeft: '10px'
	},
	'& img': {
		width: '20px',
		height: '20px',
		padding: '5px'
	}
};

const text: CSSProperties = {
	paddingLeft: '40px'
};

const innerContent: CSSProperties = {
	padding: '80px 20px 30px',
	textAlign: 'left'
};

const provider: CSSProperties = {
	marginBottom: '20px'
};

const section: CSSProperties = {
	marginTop: '23px'
};

export const styles = createStyles({
	li,
	provider,
	section,
	innerContent,
	text
});
