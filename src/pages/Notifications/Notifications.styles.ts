import { CSSProperties, createStyles } from '@material-ui/styles';

const providersList: CSSProperties = {
	marginTop: '15px',
	padding: '0px'
};

const wrapper: CSSProperties = {
	background: 'white',
	textAlign: 'center',
	maxWidth: '768px',
	margin: '0 auto',
	width: '100%',
	height: '100%',
	'& hr': {
		opacity: 0.05,
		backgroundColor: '#181c19'
	},

	'& .MuiTypography-caption': {
		marginTop: '20px',
		display: 'block',
		marginBottom: '10px'
	}
};

const innerContent: CSSProperties = {
	padding: '80px 20px 30px',
	textAlign: 'left'
};

export const styles = createStyles({
	providersList,
	innerContent,
	wrapper
});
